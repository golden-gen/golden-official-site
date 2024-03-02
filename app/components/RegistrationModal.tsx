import { useRouter } from "next/navigation";
import React from "react";
interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void; // Function to call when closing the modal
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { push } = useRouter();
  const currentYear = new Date().getFullYear();
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
        <h2 className="text-lg font-semibold">Registration Notice</h2>
        <p className="mt-4">
          Registration for GGQUIZ{currentYear} is currently closed. Please check
          back later, while you await the news, you can read about the
          competition and the eligibility criteria by using the button below.
        </p>
        <div className="mt-8">
          <button
            onClick={() => push("/about#ggquiz")}
            className="bg-primary hover:bg-dark-primary text-white font-bold py-2 px-4 rounded"
          >
            Read About GGQUIZ
          </button>
        </div>
      </div>
    </div>
  );
};
