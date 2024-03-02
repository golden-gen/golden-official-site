"use client";
import Image from "next/image";
import g4u from "../public/images/golden-for-you.png";
import ggq1 from "../public/images/quiz1.jpg";
import ggq2 from "../public/images/quiz2.jpg";
import ggq3 from "../public/images/quiz3.jpg";
import act1 from "../public/images/act1.jpg";
import act2 from "../public/images/act2.jpg";
import act3 from "../public/images/act1.jpg";
import team1 from "../public/images/team1.png";
import team2 from "../public/images/team2.png";
import team3 from "../public/images/team3.png";
import { Testimonials } from "@/components";
import { AnimatedNumber, RegistrationModal, TypingEffect } from "./components";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="mt-[25px] md:mt-0">
      <section className="flex flex-col gap-8 h-full">
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
          <p className="font-semibold font-serif text-sm md:text-xl 2xl:text-3xl text-center text-white">
            <em>...the future is our concern.</em>
          </p>
          <button
            onClick={() => push("/register")}
            className="py-[15px] px-[22px] bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto font-bold text-lg w-fit text-center uppercase"
          >
            Become a Member
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center w-[90%] md:w-[70%] max-w-[882px] mx-auto space-y-6 md:space-y-0">
          <div className="w-full md:w-[347px]">
            <h2 className="text-3xl md:text-[2.5rem] md:leading-tight font-semibold md:max-w-[12ch] text-center md:text-left uppercase">
              Our Objectives{" "}
            </h2>
          </div>
          <div>
            <ul className="space-y-[10px] font-semibold w-[90%] ml-auto">
              <li className="list-disc">To eradicate poverty among youth.</li>
              <li className="list-disc">
                To brighten the future of generation.
              </li>
              <li className="list-disc">
                To build youth and teenagers for humanities.
              </li>

              <li className="list-disc">
                To be useful for ourselves, community and all kind.
              </li>
              <li className="list-disc">
                To identify, recognize and make use of the talent of our youth
                for society development.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#22262F] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 mx-8 my-8 md:my-[70px] md:mx-[100px] gap-[30px]">
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={4} /> Local Govts. Outreach
            </div>
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={20} />+ Schools Outreach
            </div>
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={1000} />+ Students Impact
            </div>
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={10} />+ Leading Members
            </div>
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={100} />+ Growing Members
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full mx-auto space-y-[10px] flex flex-col items-center pt-[72px] pb-[91px]">
          <h1 className="text-4xl font-semibold text-center">
            Our Serving Executives.
          </h1>
          <p className="text-center font-semibold max-w-[64ch] px-4">
            Golden Generation programs are being organized by a body of
            individuals passionate about community development and are excited
            to share their experience, techniques, and professional journeys
            with you.
          </p>
          <div className="relative">
            <div className="absolute bg-primary hidden md:flex w-full h-1/3 top-1/3 -z-10 mt-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto w-[90%] max-w-md md:max-w-6xl mt-10 md:mt-20">
              <div className="bg-[#F9F9F9] shadow rounded-lg flex flex-col items-center px-4">
                <div className="my-[25px] relative">
                  <Image
                    src={team1}
                    alt="President"
                    className="z-10 relative"
                  />
                  <div className="absolute inset-x-0 bottom-0 rotate-180 -translate-y-[22px]">
                    <svg
                      className="h-full w-full scale-110 -z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="131"
                      viewBox="0 0 186 131"
                      fill="none"
                    >
                      <path
                        d="M179.176 5.36343C184.551 19.526 186.351 34.7958 184.415 49.8201C182.48 64.8444 176.869 79.1595 168.08 91.4974C159.29 103.835 147.594 113.815 134.027 120.553C120.459 127.291 105.439 130.579 90.2976 130.125C75.1559 129.672 60.3598 125.491 47.2198 117.953C34.0799 110.416 23.0016 99.7537 14.9664 86.9119C6.93124 74.0701 2.1871 59.4449 1.15425 44.3317C0.121399 29.2185 2.83172 14.0838 9.04513 0.268303L93.0551 38.0511L179.176 5.36343Z"
                        fill="#3498DB"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center mb-6">
                  <h3 className="text-center">Jimoh Lawal Akinlabi</h3>
                  <h4>President</h4>
                </div>
                <p className="text-center mb-10">
                  The president of our dear organization and the CEO, Elite
                  Computer Technologies.
                </p>
              </div>
              <div className="bg-[#F9F9F9] shadow rounded-lg flex flex-col items-center px-4">
                <div className="my-[25px] relative">
                  <Image
                    src={team2}
                    alt="Coordinator"
                    className="z-10 relative"
                  />
                  <div className="absolute inset-x-0 bottom-0 rotate-90 -translate-y-[11px] -translate-x-2.5">
                    <svg
                      className="h-full w-full scale-110 -z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="131"
                      viewBox="0 0 186 131"
                      fill="none"
                    >
                      <path
                        d="M179.176 5.36343C184.551 19.526 186.351 34.7958 184.415 49.8201C182.48 64.8444 176.869 79.1595 168.08 91.4974C159.29 103.835 147.594 113.815 134.027 120.553C120.459 127.291 105.439 130.579 90.2976 130.125C75.1559 129.672 60.3598 125.491 47.2198 117.953C34.0799 110.416 23.0016 99.7537 14.9664 86.9119C6.93124 74.0701 2.1871 59.4449 1.15425 44.3317C0.121399 29.2185 2.83172 14.0838 9.04513 0.268303L93.0551 38.0511L179.176 5.36343Z"
                        fill="#3498DB"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center mb-6">
                  <h3 className="text-center">Adebayo Faruq Adebayo</h3>
                  <h4>Coordinator</h4>
                </div>
                <p className="text-center mb-10">
                  The organization current coordinator and the technical team
                  content creator.
                </p>
              </div>
              <div className="bg-[#F9F9F9] shadow rounded-lg flex flex-col items-center px-4">
                <div className="my-[25px] relative">
                  <Image
                    src={team3}
                    alt="Asst. Coordinator"
                    className="z-10 relative"
                  />
                  <div className="absolute inset-x-0 bottom-0">
                    <svg
                      className="h-full w-full scale-110 -z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="131"
                      viewBox="0 0 186 131"
                      fill="none"
                    >
                      <path
                        d="M179.176 5.36343C184.551 19.526 186.351 34.7958 184.415 49.8201C182.48 64.8444 176.869 79.1595 168.08 91.4974C159.29 103.835 147.594 113.815 134.027 120.553C120.459 127.291 105.439 130.579 90.2976 130.125C75.1559 129.672 60.3598 125.491 47.2198 117.953C34.0799 110.416 23.0016 99.7537 14.9664 86.9119C6.93124 74.0701 2.1871 59.4449 1.15425 44.3317C0.121399 29.2185 2.83172 14.0838 9.04513 0.268303L93.0551 38.0511L179.176 5.36343Z"
                        fill="#3498DB"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center mb-6">
                  <h3 className="text-center">Abdrahman Adebayo Oladimeji</h3>
                  <h4>Asst. Coordinator</h4>
                </div>
                <p className="text-center mb-10">
                  The organization assistance coordinator and one of the
                  technical team frontend developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[calc(100%_-_32px)] max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 mt-10 mb-16 md:mt-[60px] md:mb-[100px]">
        <div className="space-y-6 w-full md:w-3/5">
          <h1 className="text-4xl font-semibold font-Poppins text-center md:text-left">
            Golden Generation For You.
          </h1>
          <p className="text-xl text-justify font-Roboto">
            Our organization provides a variety of programs and services to help
            youth build self-confidence, develop leadership skills, and make
            positive contributions to their community our club offers a range of
            activities and services, including career readiness workshops,
            academic support, community service projects and related technology.
            we believe that by investing in our youth today, we are building a
            stronger and more vibrant community for the future generations.
          </p>
          <button
            onClick={() => push("/about")}
            className="uppercase py-[15px] px-[22px] bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto text-[19px]"
          >
            Learn More
          </button>
        </div>
        <div className="w-[90%] md:w-2/5">
          <Image
            height={278}
            width={288}
            loading="lazy"
            src={g4u}
            alt="Golden for you"
            className="mx-auto md:ml-auto"
          />
        </div>
      </section>
      <section className="w-[calc(100%_-_32px)] max-w-[1200px] mx-auto space-y-10 md:space-y-16 mb-16">
        <h1 className="text-4xl font-semibold font-Roboto text-center">
          Popular GG Quiz & Debate
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          <div className="flex flex-col max-w-[348px] mx-auto space-y-5">
            <div className="flex h-full max-h-[218px] w-full">
              {/* <Image width={0} height={0} src={ggq1} loading="lazy" alt="GGQUIZ" className="w-full" /> */}
              <Image
                width={347}
                height={218}
                src={ggq1}
                loading="lazy"
                alt="GGQUIZ"
                className="w-full"
              />
            </div>
            <p className="px-2.5">
              Annual Golden Generation Quiz Competition for Senior Secondary
              School Students.
            </p>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="uppercase py-[15px] px-[22px] bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto text-[19px] w-full text-center"
            >
              Register
            </button>
          </div>
          <div className="flex flex-col max-w-[348px] mx-auto space-y-5">
            <div className="flex h-full max-h-[218px] w-full">
              <Image
                width={348}
                height={218}
                src={ggq2}
                loading="lazy"
                alt="GG Debate English"
                className="w-full"
              />
            </div>
            <p className="px-2.5">
              Annual Golden Generation Debate Competition [English Language] for
              Senior Secondary School Students.
            </p>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="uppercase py-[15px] px-[22px] bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto text-[19px] w-full text-center"
            >
              Register
            </button>
          </div>
          <div className="flex flex-col max-w-[348px] mx-auto space-y-5">
            <div className="flex h-full max-h-[218px] w-full">
              <Image
                width={348}
                height={218}
                src={ggq3}
                loading="lazy"
                alt="GG Debate Yoruba"
                className="w-full"
              />
            </div>
            <p className="px-2.5">
              Annual Golden Generation Debate Competition [Yoruba Language] for
              Senior Secondary School Students.
            </p>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="uppercase py-[15px] px-[22px] bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto text-[19px] w-full text-center"
            >
              Register
            </button>
          </div>
        </div>
      </section>
      <section className="w-[calc(100%_-_32px)] max-w-[1200px] mx-auto space-y-10 md:space-y-16 mb-16">
        <h1 className="text-3xl font-semibold font-Poppins text-[#333333] text-center">
          Our Activities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          <div className="flex flex-col w-full max-w-[400px] mx-auto space-y-5">
            <div className="flex h-full max-h-[256px] w-full">
              <Image
                width={409}
                height={256}
                src={act1}
                loading="lazy"
                alt="GGQUIZ"
                className="w-full"
              />
            </div>
            <h3 className="px-3 text-2xl text-[#333333] font-medium">
              Skill Acquisition
            </h3>
          </div>
          <div className="flex flex-col w-full max-w-[400px] mx-auto space-y-5">
            <div className="flex h-full max-h-[256px] w-full">
              <Image
                width={409}
                height={256}
                src={act2}
                loading="lazy"
                alt="GG Debate English"
                className="w-full"
              />
            </div>
            <h3 className="px-3 text-2xl text-[#333333] font-medium">
              School Outreach
            </h3>
          </div>
          <div className="flex flex-col w-full max-w-[400px] mx-auto space-y-5">
            <div className="flex h-full max-h-[256px] w-full">
              <Image
                width={409}
                height={256}
                src={act3}
                loading="lazy"
                alt="GG Debate Yoruba"
                className="w-full"
              />
            </div>
            <h3 className="px-3 text-2xl text-[#333333] font-medium">
              Community Outreach
            </h3>
          </div>
        </div>
      </section>
      <Testimonials />
      <RegistrationModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </main>
  );
}
