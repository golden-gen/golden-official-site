"use client";
import { useParams } from "next/navigation";

export default function SuccessPage() {
  const params = useParams();
  const studentId = params?.studentId;
  const othersName = params?.othersName;

  // decode uri component for othersName if needed, but usually next handles basic decoding. 
  // However, usually it's better to render it directly.
  
  return (
    <div className='flex flex-col justify-center items-center min-h-dvh px-4 py-20'>
      <div className="flex flex-col items-center justify-center mx-auto bg-[#F9F9F9] border border-1 border-[#E1E1E1] rounded-lg py-12 px-4 md:px-8 max-w-lg md:max-w-2xl">
        <h1 className='text-center flex justify-center'>
            <img src={'/images/success.gif'} alt="✨" />
        </h1>
        <h2 className='text-xl font-semibold text-center text-[#4F4E4E] mt-4 mb-2'>Registration Successful</h2>
        <p className="text-center">Dear {othersName}, you have successfully registered for Golden Generation Quiz (GGQUIZ2025). Ensure you note down your student ID below as it&apos;ll be required for your CBT Assessment.</p>
        {studentId &&
          <button className='bg-primary hover:bg-primary/80 py-3 px-4 text-white rounded-md mt-4'>
              Student ID: {studentId}
          </button>
        }
      </div>
    </div>
  );
}
