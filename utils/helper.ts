// import { Student } from '@/app/admin/page';
// import { jsPDF } from 'jspdf'
// import { autoTable } from 'jspdf-autotable'

// export const exportToExcel = (students: Student[]): void => {
//   if (students.length === 0) {
//     alert('No data to export.');
//     return;
//   }

//   // 1. Define the CSV header row
//   const headers = [
//     "Surname",
//     "Others Name",
//     "Class",
//     "Email",
//     "Phone No",
//     "Gender",
//     "School",
//   ];

//   // 2. Format the data rows
//   const csvData = students.map(student => [
//     student.surname,
//     student.othersName,
//     student.class,
//     student.email,
//     student.phoneNo,
//     student.gender,
//     student.school,
//   ]);

//   // 3. Combine header and data, then format as CSV string
//   // Use map and join to handle commas within fields (though simple students data may not need it)
//   const rows = [headers, ...csvData].map(row => row.join(',')).join('\n');

//   // 4. Create a Blob and a download link
//   const blob = new Blob([rows], { type: 'text/csv;charset=utf-8;' });
//   const url = URL.createObjectURL(blob);

//   // 5. Trigger the download
//   const link = document.createElement('a');
//   link.setAttribute('href', url);
//   link.setAttribute('download', 'GGQuiz2025_Registration.csv');
//   link.style.visibility = 'hidden';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// export const exportToPdf = (students: Student[]): void => {
//   if (students.length === 0) {
//     alert('No data to export.');
//     return;
//   }

//   // Create a new jsPDF instance
//   const doc = new jsPDF();

//   const columns = [
//     { header: 'Name', dataKey: 'fullName' },
//     { header: 'School', dataKey: 'school' },
//     { header: 'Class', dataKey: 'class' },
//     { header: 'Email', dataKey: 'email' },
//     { header: 'Phone', dataKey: 'phoneNo' },
//     { header: 'Gender', dataKey: 'gender' },
//   ];

//   // Prepare the data for the autoTable plugin
//   const rows = students.map(student => ({
//     ...student,
//     fullName: `${student.surname} ${student.othersName}`, // Combine names
//   }));

//   autoTable(doc, {
//     head: [columns.map(col => col.header)],
//     // @ts-ignore
//     body: rows.map(row => columns.map(col => row[col.dataKey])),
//     startY: 20,
//     styles: { fontSize: 8 },
//     headStyles: { fillColor: [0, 123, 255] }, // Blue header
//     // @ts-ignore
//     didDrawPage: (data) => {
//         // Add a title
//         doc.setFontSize(14);
//         doc.text("GGQUIZ 2025 Student Registration Report", data.settings.margin.left, 15);
//     }
//   });

//   doc.save('GGQuiz2025_Registration.pdf');
// };
