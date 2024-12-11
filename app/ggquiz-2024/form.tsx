import axios from "axios";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegistrationSuccess } from "../components";

interface initialValuesType {
  surname: string;
  othersName: string;
  class: string;
  email: string;
  gender: string;
  phoneNo: string;
  school: string;
}

const RegistrationForm = () => {
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState({
    surname: "",
    othersName: "",
    studentId: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const initialValues: initialValuesType = {
    surname: "",
    othersName: "",
    class: "",
    email: "",
    gender: "",
    phoneNo: "",
    school: "",
  };

  const register = async (
    values: initialValuesType,
    { resetForm }: FormikHelpers<initialValuesType>
  ) => {
    try {
      setSubmitting(true);

      const res = await axios.post(
        `https://registration-api-xc9m.onrender.com/api/v1/reg/student`,
        values
      );

      setSubmitting(false);
      resetForm();
      console.log(res)
      if (res.data) {
        setSuccessData(res.data?.data || res.data);
        setIsOpen(true);
      } else {
        toast("Something went wrong, try again!", { type: "warning" });
      }
    } catch (error: any) {
      setSubmitting(false);

      const message = error.response?.message || error.response?.data;

      if (message?.includes("E11000 duplicate")) {
        toast("Phone number already used by another applicant", {
          type: "error",
        });
      } else {
        toast(message || "An error occurred", { type: "error" });
      }
    }
  };

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: register,
  });

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold text-center text-[#4F4E4E] mb-8">
            Registration Form For GGQUIZ 2024
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray"
              >
                Surname:
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={values.surname}
                onChange={handleChange}
                required
                placeholder="Enter your surname here"
                className="w-full mt-1 px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="other_name"
                className="block text-sm font-medium text-gray"
              >
                Other Names:
              </label>
              <input
                type="text"
                name="othersName"
                id="other_name"
                value={values.othersName}
                onChange={handleChange}
                required
                placeholder="Enter your other names here"
                className="w-full mt-1 px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray"
              >
                Phone Number:
              </label>
              <input
                type="text"
                name="phoneNo"
                id="phone"
                value={values.phoneNo}
                onChange={handleChange}
                required
                placeholder="e.g 08012345678"
                className="w-full mt-1 px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray"
              >
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                required
                placeholder="e.g yourmail@gmail.com"
                className="w-full mt-1 px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="school"
                className="block text-sm font-medium text-gray"
              >
                School:
              </label>
              <input
                type="text"
                name="school"
                id="school"
                value={values.school}
                onChange={handleChange}
                required
                placeholder="Golden generation school"
                className="w-full mt-1 px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray"
              >
                Gender:
              </label>
              <select
                name="gender"
                id="gender"
                value={values.gender}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray"
              >
                Class:
              </label>
              <select
                name="class"
                id="class"
                value={values.class}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option disabled>Select your class</option>
                <option value="ss1">SSS 1</option>
                <option value="ss2">SSS 2</option>
                <option value="ss3">SSS 3</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 text-white rounded-md mt-4 mb-20 ${
                  isSubmitting
                    ? "bg-gray cursor-not-allowed"
                    : "bg-primary hover:bg-primary/80"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {
        // successData.surname &&
        // successData.othersName &&
        // successData.studentId && 
        (
          <RegistrationSuccess
            isOpen={!isOpen}
            onClose={() => setIsOpen(!isOpen)}
            othersName={successData.othersName}
            studentId={successData.studentId}
            surname={successData.surname}
          />
        )}
    </>
  );
};

export default RegistrationForm;
