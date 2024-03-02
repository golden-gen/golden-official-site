import React from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void; // Function to call when closing the modal
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-500/60 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <span className="absolute top-0 right-0 p-4">
          <button onClick={onClose}>[Close]</button>
        </span>
        <h2 className="text-lg font-semibold">Registration Notice</h2>
        <p className="mt-4">Registration is not currently on. Please check back later, also if you&rsquo;d like to be a part of us, use the volunteer button below.</p>
        <div className="mt-8">
          <button className="bg-[#3498DB] text-white font-bold py-2 px-4 rounded">
            Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

