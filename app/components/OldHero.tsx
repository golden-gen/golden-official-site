import Image from "next/image"
import TypingEffect from "./TypingEffect"
import { useRouter } from "next/navigation"

export const OldHero = () => {
    const {push} = useRouter()
    return (
        <div className="h-full min-h-screen bg-[#010101]/60 bg-hero bg-center md:bg-top bg-no-repeat bg-cover bg-blend-multiply flex flex-col justify-center items-center md:py-20 space-y-4 md:space-y-10">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/logo.jpg"
              alt="Golden Generation Logo"
              className="block md:hidden rounded-full mb-4"
              width={100}
              height={100}
            />
            <Image
              src="/logo.jpg"
              alt="Golden Generation Logo"
              className="hidden md:block rounded-full mb-4"
              width={200}
              height={200}
            />
            <h1 className="uppercase font-semibold text-4xl md:text-[4.375rem] md:leading-tight 2xl:text-[7.375rem] text-center text-white max-w-[26ch]">
              Every Home Deserves <br /> <TypingEffect />
            </h1>
            <svg
              className="sm:translate-x-10 w-[100px] md:w-[200px]"
              xmlns="http://www.w3.org/2000/svg"
              width="242"
              height="17"
              viewBox="0 0 242 17"
              fill="none"
            >
              <path
                d="M2.53583 13.7859C80.9762 8.66396 238.106 -0.555587 239.102 3.54199"
                stroke="#FFE601"
                stroke-width="4.76195"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-sm md:text-2xl 2xl:text-4xl text-center text-white max-w-[40ch]">
            Welcome to the official website of Golden Generation Community
            Development Club (GGCDC). <br />{" "}
          </h3>
          <p className="font-semibold font-serif text-sm md:text-xl 2xl:text-3xl mb-2 text-center text-white">
            <em>...the future is our concern.</em>
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => push("/ggquiz-2024")}
              className="py-[15px] px-[22px] bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto font-bold text-lg w-fit text-center uppercase"
            >
              Register for GGQuiz
            </button>
            <button
              onClick={() => push("/register")}
              className="py-[15px] px-[22px] bg-[#010101] hover:bg-[#010101]/60 transition duration-200 text-white font-Roboto font-bold text-lg w-fit text-center uppercase"
            >
              Become a Member
            </button>
          </div>
        </div>
    )
}