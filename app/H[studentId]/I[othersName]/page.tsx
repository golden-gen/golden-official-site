export default async function SuccessPage({params}:{params: Promise<{studentId: string, othersName: string}>}) {
   let dummy = {
        "message": "Registered Successfully",
        "data": {
            "surname": "Oladimeji",
            "othersName": "Abdrahman",
            "class": "ss3",
            "email": "abdrahmanoladimeji02@gmail.com",
            "phoneNo": "09023600085",
            "gender": "",
            "school": "Golden Generation School",
            "_id": "67571045aef18a7e51e0e2e5",
            "__v": 0,
            "studentId": "ST-88676-GG2025"
        }
    }
  console.log(params);
  // let surname= 'a'
  // let otherName= 'b'
  // let studentId= 'ST-88676-GG2025'
  // const { surname, otherName, studentId };

  // const slug = (await params).slug
  // console.log(slug)

  const studentId = (await params).studentId
  const othersName = (await params).othersName

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
