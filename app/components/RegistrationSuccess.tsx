"use client";
import Link from "next/link";
import React, { useRef } from "react";
interface RegistrationSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  surname: string;
  othersName: string;
  studentId: string;
}

export const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({
  isOpen,
  onClose,
  surname,
  othersName,
  studentId,
}) => {
  const printRef = useRef<HTMLDivElement>(null); // Reference to the modal content

  const handlePrint = () => {
    if (printRef.current) {
      const printContents = printRef.current.innerHTML;
      const originalContents = document.body.innerHTML;

      // Replace the body content with modal content for printing
      document.body.innerHTML = printContents;
      window.print();

      // Restore the original content after printing
      document.body.innerHTML = originalContents;
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black/30 backdrop-blur-sm flex">
      <div
        ref={printRef}
        className="relative p-8 bg-white w-[90%] max-w-md m-auto flex-col flex rounded-lg"
      >
        <span className="absolute top-0 right-0 p-4">
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="text-2xl hover:scale-90 transition duration-200 print:hidden"
          >
            ❌
          </button>
        </span>
        <h1 className="text-center flex justify-center">
          <img src={"/images/success.gif"} alt="✨" />
        </h1>
        <h2 className="text-2xl print:text-3xl font-semibold text-center text-[#4F4E4E] mt-4 mb-2">
          Registration Successful
        </h2>
        <p className="text-center print:text-lg">
          Dear {surname} {othersName}, you have successfully registered for
          Golden Generation Quiz (GGQUIZ2024). Ensure you note down your student
          ID below as it&apos;ll be required for your CBT Assessment.
        </p>
        <p className="text-center print:text-lg">
          You can also print a copy.
        </p>
        {studentId && (
          <h3 className="text-3xl print:text-4xl font-semibold text-center text-[#4F4E4E] mt-4 mb-2">
            Student ID: {studentId}
          </h3>
        )}
        <div className="flex justify-evenly items-center print:hidden">
          <button
            onClick={handlePrint}
            className="bg-primary hover:bg-primary/80 py-3 px-4 text-white rounded-md mt-8"
          >
            Print
          </button>
          <p className="mt-8">or</p>
          <Link
            href={`/${studentId}/${othersName}`}
            className="bg-primary hover:bg-primary/80 py-3 px-4 text-white rounded-md mt-8"
          >
            Open in a new page
          </Link>
        </div>
      </div>
    </div>
  );
};
