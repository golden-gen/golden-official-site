"use client";
import Image from "next/image";
import g4u from "../public/images/golden-for-you.png";
import ggq1 from "../public/images/quiz1.jpg";
import ggq2 from "../public/images/quiz2.jpg";
import ggq3 from "../public/images/quiz3.jpg";
import act1 from "../public/images/act1.jpg";
import act2 from "../public/images/act2.jpg";
import act3 from "../public/images/act1.jpg";
import { Testimonials } from "@/src/components/Testimonials/Testimonials";
import { AnimatedNumber } from "@/src/components/AnimatedNumber";
import { useRouter } from "next/navigation";
import { HeroCarousel } from "@/src/features/home/HeroCarousel";

export default function Home() {
  const { push } = useRouter();

  return (
    <main className="overflow-x-hidden mt-[25px] md:mt-0">
      <section className="flex flex-col gap-8 h-full">
        <HeroCarousel />
        <div className="flex flex-col items-center mx-auto space-y-6 md:space-y-0">
          <h2
            data-aos="fade-up"
            className="text-3xl md:leading-tight font-semibold text-center uppercase font-Roboto pb-4 md:pb-6"
          >
            Our Objectives
          </h2>
          <div
            data-aos="fade-up"
            className="w-full md:w-[700px] text-center font-Roboto text-lg pb-4 md:pb-8 text-blackish px-6 md:px-auto"
          >
            <p>
              To build youth and teenagers for humanities | To brighten the
              future of generation To eradicate poverty among youth | To
              identify, recognize and make use of the talent of our for society
              development | To be useful for ourselves, community and all kind.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" className="bg-[#22262F] w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 mx-8 my-8 md:my-[70px] md:mx-[132px] gap-[30px]">
            <div className="text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={4} /> Local governments outreach
            </div>
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={20} />+ <br />
              Schools Outreach
            </div>
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={1000} />+ <br />
              Students
              <br />
              Impact
            </div>
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={10} />+ <br />
              Leading Members
            </div>
            <div className="uppercase text-white bg-primary p-6 font-bold text-[27px] w-full max-w-[380px] mx-auto sm:mx-0">
              <AnimatedNumber value={100} />+ <br />
              Growing Members
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full mx-auto space-y-[6px] flex flex-col items-center pt-[72px] pb-[91px]">
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center font-Roboto pb-4"
          >
            Organization Structure
          </h1>
          <p
            data-aos="zoom-in-up"
            className="text-center text-lg w-full px-6 md:w-[40rem] text-blackish"
          >
            Golden Generation Community Development Club operates through a
            structured network of dedicated teams.
          </p>
          <div className="relative w-full">
            <div className="absolute bg-primary hidden md:flex w-full h-1/3 top-1/3 -z-10 mt-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto w-[90%] max-w-md md:max-w-6xl mt-10 md:mt-20">
              {/* International Team */}
              <div
                data-aos="fade-right"
                className="bg-[#F9F9F9] font-Roboto shadow rounded-lg flex flex-col items-center p-8 min-h-[300px] justify-between"
              >
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    International Team
                  </h3>
                  <p className="text-center mb-6 text-gray-600">
                    Comprising Patrons, Advisers, and global members who provide
                    high-level guidance and extend our reach across borders.
                  </p>
                </div>
                <button
                  onClick={() => push("/team")}
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-dark-primary transition-colors uppercase font-medium"
                >
                  View Team
                </button>
              </div>

              {/* National Team */}
              <div
                data-aos="flip-up"
                className="bg-[#F9F9F9] font-Roboto shadow rounded-lg flex flex-col items-center p-8 min-h-[300px] justify-between"
              >
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    National Team
                  </h3>
                  <p className="text-center mb-6 text-gray-600">
                    The central executive body led by the President, responsible
                    for strategic planning, policy-making, and overall
                    administration.
                  </p>
                </div>
                <button
                  onClick={() => push("/team")}
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-dark-primary transition-colors uppercase font-medium"
                >
                  View Team
                </button>
              </div>

              {/* Local Team */}
              <div
                data-aos="fade-left"
                className="bg-[#F9F9F9] font-Roboto shadow rounded-lg flex flex-col items-center p-8 min-h-[300px] justify-between"
              >
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Local Team
                  </h3>
                  <p className="text-center mb-6 text-gray-600">
                    Grassroots coordinators and officers who implement our
                    programs and engage directly with the community at the local
                    level.
                  </p>
                </div>
                <button
                  onClick={() => push("/team")}
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-dark-primary transition-colors uppercase font-medium"
                >
                  View Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[calc(100%_-_32px)] max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 mt-10 mb-16 md:mt-[60px] md:mb-[100px]">
        <div
          data-aos="fade-up-left"
          className="flex flex-col justify-center md:justify-start space-y-6 px-auto w-full md:w-3/5"
        >
          <h1 className="text-3xl font-semibold font-Poppins text-center md:text-left">
            Golden Generation for Teams
          </h1>
          <p className="text-base sm:text-xl w-full md:w-3/4 capitalize font-Roboto text-justify md:text-left px-0">
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
            className="uppercase py-[15px] w-full md:w-[28rem] px-8 bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto text-[19px]"
          >
            Learn More
          </button>
        </div>
        <div data-aos="fade-up-right" className="w-[90%] md:w-2/5">
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
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-4xl font-semibold font-Roboto text-center"
        >
          Trending GG2025 Competition
        </h1>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5"
        >
          {[
            {
              src: ggq1,
              alt: "GGQUIZ",
              description:
                "Annual Golden Generation Quiz Competition for Senior Secondary School Students.",
            },
            {
              src: ggq2,
              alt: "GG Debate English",
              description:
                "Annual Golden Generation Debate Competition [English Language] for Senior Secondary School Students.",
            },
            {
              src: ggq3,
              alt: "GG Debate Yoruba",
              description:
                "Annual Golden Generation Debate Competition [Yoruba Language] for Senior Secondary School Students.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col max-w-[348px] mx-auto space-y-5 h-full"
            >
              <div className="flex h-full max-h-[218px] w-full">
                <Image
                  width={348}
                  height={218}
                  src={item.src}
                  loading="lazy"
                  alt={item.alt}
                  className="w-full"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <p className="px-2.5 font-Roboto font-semibold pb-6">
                  {item.description}
                </p>
                <button
                  onClick={() => push("/ggquiz-2025")}
                  className="uppercase py-[15px] px-[22px] bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto text-[19px] w-full text-center"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-[calc(100%_-_32px)] max-w-[1200px] mx-auto space-y-10 md:space-y-16 mb-16">
        <h1
          data-aos="zoom-in-left"
          className="text-3xl font-semibold font-Poppins text-[#333333] text-center"
        >
          Our Activities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col w-full max-w-[400px] mx-auto space-y-5"
          >
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
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex flex-col w-full max-w-[400px] mx-auto space-y-5"
          >
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
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col w-full max-w-[400px] mx-auto space-y-5"
          >
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
    </main>
  );
}
