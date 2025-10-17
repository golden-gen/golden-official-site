"use client";
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
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (printRef.current) {
      const printContents = printRef.current.innerHTML;

      const printWindow = window.open(" ", "_blank");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <title>Golden Generation Quiz 2025 (GGQUIZ2025)</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 10px;
                  padding: 5px;
                  line-height: 1.6;
                  height: 100%;
                  overflow: hidden;
                }
                div.printHidden, button, a {
                  display: none;
                }
                .or {
                    display: none !important;
                }
                @media print {
                  html, body {
                    height: auto;
                    overflow: visible;
                    margin: 0;
                    padding: 0;
                  }
                  div.printHidden {
                    display: none !important;
                  }
                }
                </style>
              </head>
            <body>
              ${printContents}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }
    }
  };
  const handlePrintMobile = () => {
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
        className="relative p-8 bg-white w-[90%] max-w-md m-auto flex-col flex print:block rounded-lg"
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
        <p className="text-center print:text-lg print:text-left">
          Dear {surname} {othersName}, you have successfully registered for
          Golden Generation Quiz (GGQUIZ2025). Ensure you note down your student
          ID below as it&apos;ll be required for your CBT Assessment.
        </p>
        {studentId && (
          <h3 className="text-3xl print:text-4xl font-semibold text-center text-[#4F4E4E] mt-4 mb-2">
            Student ID: {studentId}
          </h3>
        )}
        <div className="hidden print:block print:text-lg">
          <p className="print:mb-2">
            You are required to show up at our office with your slip using the
            details below: <br />
            <strong>Address: </strong> Elite Computer Technology, Behind
            Tola&apos;s House, Agunpopo Area, Oyo, Oyo State. <br />
            Between any of the dates below: <br />
            <strong>Dates: </strong> 28th - 29th December, 2025. <br />
            <strong>Time: </strong> 9:00am prompt
          </p>
          <p className="print:mb-2">
            If you have any questions or need further assistance, please
            don&apos;t hesitate to contact us on: (+234) 706-231-4302 or
            goldengenerationoyo@gmail.com.
          </p>
          <p className="print:mb-2">We look forward to seeing you there!</p>
          <p>
            Best regards, <br /> Golden Generation Team <br />{" "}
            <i>...the future is our concern.</i>
          </p>
        </div>
        <div className="flex justify-center items-center print:hidden printHidden mt-8">
          <button
            onClick={handlePrint}
            className="hidden md:flex bg-primary hover:bg-primary/80 py-3 px-4 text-white rounded-md"
          >
            Print Slip
          </button>
          <button
            onClick={handlePrintMobile}
            className={`flex md:hidden bg-primary hover:bg-primary/80 py-3 px-4 text-white rounded-md"`}
          >
            Print Slip
          </button>
        </div>
      </div>
    </div>
  );
};
