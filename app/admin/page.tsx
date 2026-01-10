"use client";
// import { exportToExcel, exportToPdf } from '@/src/utils/helper';
import React, {
  useState,
  useEffect,
  useMemo,
  FormEvent,
  ChangeEvent,
} from "react";

// Define the structure of a single student record based on the API response
export interface Student {
  _id: string;
  surname: string;
  othersName: string;
  class: string;
  email: string;
  phoneNo: string;
  gender: string;
  school: string;
  __v: number;
}

// Define the structure of the successful API response
interface StudentApiResponse {
  message: string;
  data: Student[];
}

// Define the structure for the aggregated overview data
interface OverviewData {
  total: number;
  classes: Record<string, number>; // e.g., { 'SS2': 5, 'SS3': 10 }
  genders: {
    male: number;
    female: number;
    "N/A": number;
  };
}

// --- CONFIGURATION ---
const API_URL =
  "https://registration-api-qvby.onrender.com/api/v1/reg/students";
const MOCK_USER_EMAIL = [
  "abdrahmanoladimeji02@gmail.com",
  "adebayorfaruqadebayo@yahoo.com",
  "goldengenerationoyo@gmail.com",
];
const MOCK_USER_PASSWORD = "Testpass123@";
// ----------------------

const Dashboard: React.FC = () => {
  // Authentication State: We explicitly set the type to boolean
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    // Client-side check for localStorage
    typeof window !== "undefined"
      ? localStorage.getItem("isLoggedIn") === "true"
      : false
  );

  // Data States: We explicitly set the types for Student[] and string | null
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Login Form States: We explicitly set the type to string
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");

  // --- MOCK AUTH LOGIC ---
  // FormEvent<HTMLFormElement> types the submit event
  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoginError("");

    if (MOCK_USER_EMAIL.includes(email) && password === MOCK_USER_PASSWORD) {
      // Successful login
      localStorage.setItem("isLoggedIn", "true");
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
    } else {
      // Failed login
      setLoginError(
        "Invalid email or password. Try admin@example.com / password123"
      );
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
    setStudents([]);
  };
  // -------------------------

  // --- DATA FETCHING (Only runs when isAuthenticated is true) ---
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchStudents = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            alert("Session expired or unauthorized. Logging out.");
            handleLogout();
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Explicitly cast the result to the expected interface
        const result: StudentApiResponse = await response.json();

        if (result && Array.isArray(result.data)) {
          setStudents(result.data);
        } else {
          throw new Error(
            'Invalid data format: Expected an array in the "data" property.'
          );
        }
      } catch (err) {
        // Type narrowing for the error object
        if (err instanceof Error) {
          setError(`Failed to load student data: ${err.message}`);
        } else {
          setError("An unknown error occurred during data fetching.");
        }
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [isAuthenticated]);

  // --- DATA AGGREGATION FOR OVERVIEW CARDS (Typed useMemo) ---
  const overviewData: OverviewData = useMemo(() => {
    if (students.length === 0) {
      return {
        total: 0,
        classes: {},
        genders: { male: 0, female: 0, "N/A": 0 },
      };
    }

    // Explicitly type the accumulator object for class counts
    const classCounts: Record<string, number> = {};
    const genderCounts: OverviewData["genders"] = {
      male: 0,
      female: 0,
      "N/A": 0,
    };

    students.forEach((student: Student) => {
      // Class aggregation
      const studentClass = student.class.trim().toUpperCase() || "N/A";
      classCounts[studentClass] = (classCounts[studentClass] || 0) + 1;

      // Gender aggregation
      const studentGender = student.gender.trim().toLowerCase() || "N/A";
      if (studentGender === "male") {
        genderCounts.male += 1;
      } else if (studentGender === "female") {
        genderCounts.female += 1;
      } else {
        genderCounts["N/A"] += 1;
      }
    });

    return {
      total: students.length,
      classes: classCounts,
      genders: genderCounts,
    };
  }, [students]);
  // ---------------------------------------------------------------------

  // --- RENDER LOGIN FORM (If not authenticated) ---
  if (!isAuthenticated) {
    return (
      <div style={styles.loginContainer}>
        <form onSubmit={handleLogin} style={styles.loginForm}>
          <h2
            style={{ marginBottom: "20px" }}
            className="text-center font-bold text-2xl"
          >
            Admin Login
          </h2>
          {loginError && <p style={styles.errorText}>{loginError}</p>}
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            // ChangeEvent<HTMLInputElement> types the input change event
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            style={styles.input}
            required
          />
          <button
            type="submit"
            style={styles.loginButton}
            className="bg-primary"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }

  // --- RENDER DASHBOARD (If authenticated) ---
  if (loading) {
    return (
      <div
        style={{ padding: "40px", textAlign: "center" }}
        className="min-h-[40vh] flex items-center justify-center"
      >
        Loading dashboard data...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{ padding: "40px", color: "red", textAlign: "center" }}
        className="min-h-[40vh] flex items-center justify-center"
      >
        Error: {error}
      </div>
    );
  }

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.header}>
        <h1 className="text-xl font-semibold">
          Student Registration Dashboard 📊
        </h1>
        <div style={styles.buttonGroup}>
          {/* <button disbled={true} style={styles.exportExcelButton}>
            Export to Excel (CSV)
          </button>
          <button onClick={()=>exportToPdf(students)} style={styles.exportPdfButton}>
            Export to PDF
          </button> */}
          <button onClick={handleLogout} style={styles.logoutButton}>
            Log Out
          </button>
        </div>
      </div>

      <div style={styles.cardContainer}>
        {/* Card 1: Total Students */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Total Registered Students</h3>
          <p style={styles.cardValue}>{overviewData.total}</p>
        </div>

        {/* Card 2: Class Breakdown */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Class Breakdown</h3>
          <div style={styles.cardContentList}>
            {/* Object.entries returns [key, value], typed as [string, number] here */}
            {Object.entries(overviewData.classes).map(
              ([className, count]: [string, number]) => (
                <p key={className} style={styles.cardListItem}>
                  <strong>{className}:</strong> {count}
                </p>
              )
            )}
          </div>
        </div>

        {/* Card 3: Gender Breakdown */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Gender Distribution</h3>
          <div style={styles.cardContentList}>
            <p style={styles.cardListItem}>
              <strong>Male:</strong> {overviewData.genders.male}
            </p>
            <p style={styles.cardListItem}>
              <strong>Female:</strong> {overviewData.genders.female}
            </p>
            <p style={styles.cardListItem}>
              <strong>N/A:</strong> {overviewData.genders["N/A"]}
            </p>
          </div>
        </div>
      </div>

      {students.length === 0 ? (
        <p>No student records found.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow} className="bg-primary">
                <th style={styles.tableHeader}>S/N</th>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>School</th>
                <th style={styles.tableHeader}>Class</th>
                <th style={styles.tableHeader}>Gender</th>
                <th style={styles.tableHeader}>Email</th>
                <th style={styles.tableHeader}>Phone No</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student: Student, idx) => (
                <tr key={student._id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{`${idx + 1}`}</td>
                  <td
                    style={styles.tableCell}
                  >{`${student.surname} ${student.othersName}`}</td>
                  <td style={styles.tableCell}>{student.school || "N/A"}</td>
                  <td style={styles.tableCell} className="uppercase">
                    {student.class || "N/A"}
                  </td>
                  <td style={styles.tableCell} className="capitalize">
                    {student.gender || "N/A"}
                  </td>
                  <td style={styles.tableCell}>{student.email || "N/A"}</td>
                  <td style={styles.tableCell}>{student.phoneNo || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// --- STYLES (Simple inline styles for demonstration) ---
// Using React.CSSProperties is optional but helps with type safety for style objects
const styles: Record<string, React.CSSProperties> = {
  dashboardContainer: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "100px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  exportExcelButton: {
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  exportPdfButton: {
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "8px 15px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  card: {
    background: "#f8f9fa",
    border: "1px solid #e9ecef",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    margin: "0 0 15px 0",
    fontSize: "1.1em",
    color: "#495057",
    borderBottom: "1px solid #dee2e6",
    paddingBottom: "10px",
  },
  cardValue: {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#007bff",
    margin: "0",
  },
  cardContentList: {
    maxHeight: "150px",
    overflowY: "auto",
  },
  cardListItem: {
    margin: "5px 0",
    fontSize: "0.9em",
  },
  table: {
    width: "100%",
    borderWidth: "1",
    borderSpacing: "0",
    minWidth: "700px",
  },
  tableHeaderRow: {
    color: "white",
  },
  tableHeader: {
    padding: "12px 10px",
    textAlign: "left",
    fontWeight: "bold",
  },
  tableRow: {
    borderBottom: "1px solid #eee",
  },
  tableCell: {
    padding: "10px",
    textAlign: "left",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  loginForm: {
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "350px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1.1em",
  },
  errorText: {
    color: "#dc3545",
    marginBottom: "15px",
    border: "1px solid #f5c6cb",
    backgroundColor: "#f8d7da",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "0.9em",
    textAlign: "center",
  },
};

export default Dashboard;
