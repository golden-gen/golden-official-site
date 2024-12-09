export default async function SuccessPage({params}:{params: Promise<{studentId: string, othersName: string}>}) {
  const studentId = (await params).studentId

  return (

    <div className='flex flex-col justify-center items-center min-h-dvh'>
      <div className="flex flex-col items-center justify-center mx-auto bg-[#F9F9F9] border border-1 border-[#E1E1E1] rounded-lg py-12">
        <h1 className='text-xl font-semibold text-center text-[#4F4E4E] mb-8'>Registration Successful</h1>
        <p className="text-center">You have successfully registered for Golden Generation Quiz (GGQUIZ2024). Ensure you note down your student ID below as it&apos;ll be required for your CBT Assessment.</p>
        <p>Student ID: {studentId}</p>
        {studentId &&
          <button className='bg-primary hover:bg-primary/80 py-3 px-4 text-white rounded-md mt-4 mb-20'>
              Student ID: {studentId}
          </button>
        }
      </div>
    </div>
  );
}
