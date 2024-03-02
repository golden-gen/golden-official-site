export default function Register() {
  return (
    <main>
      <h1 className="bg-[#FBFBFB] text-2xl font-semibold mt-36 py-6 text-center px-8 w-[90%] mx-auto">
        Register to become a member of Golden Generation
      </h1>
      <div className="flex justify-center items-center w-full min-h-screen my-10 md:my-20">
        <div className="w-full max-w-3xl h-auto">
          <iframe
            className="w-full h-[1554px] sm:h-[1354px] md:h-[1254px]"
            src="https://docs.google.com/forms/d/e/1FAIpQLScCZh2XBbOjbBGFBzx64-uiTKJ_WMb5KPeHg6xHJnqz6G-f5w/viewform?embedded=true"
            style={{ minHeight: "100vh" }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  );
}
