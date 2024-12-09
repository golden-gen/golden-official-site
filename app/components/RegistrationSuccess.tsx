import React from "react";
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black/30 backdrop-blur-sm flex">
      <div className="relative p-8 bg-white w-[90%] max-w-md m-auto flex-col flex rounded-lg">
        <span className="absolute top-0 right-0 p-4">
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="text-2xl hover:scale-90 transition duration-200"
          >
            ❌
          </button>
        </span>
        <h1 className='text-center flex justify-center'>
            <img src={'/images/success.gif'} alt="✨" />
        </h1>
        <h2 className='text-xl font-semibold text-center text-[#4F4E4E] mt-4 mb-2'>Registration Successful</h2>
        <p className="text-center">Dear {surname} {othersName}, you have successfully registered for Golden Generation Quiz (GGQUIZ2024). Ensure you note down your student ID below as it'll be required for your CBT Assessment.</p>
        {studentId &&
          <button className='bg-primary hover:bg-primary/80 py-3 px-4 text-white rounded-md mt-4'>
              Student ID: {studentId}
          </button>
        }
      </div>
    </div>
  );
};
