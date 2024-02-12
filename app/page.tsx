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

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-8 h-full">
        <div className="h-full min-h-[772px] bg-[#010101]/80 bg-hero bg-center md:bg-top bg-no-repeat bg-cover flex flex-col justify-center items-center">
          <h1 className="capitalize font-semibold text-3xl md:text-[4.375rem] md:leading-tight 2xl:text-[7.375rem] text-center text-white max-w-[26ch]">
            Empowering Communities for a Golden Tomorrow
          </h1>
          <h3 className="font-semibold text-sm md:text-2xl 2xl:text-4xl text-center text-white">
            {" "}
            Golden Generation is here to support you on every step of your
            creative journey.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center w-[90%] md:w-[70%] max-w-[882px] mx-auto space-y-6 md:space-y-0">
          <div className="w-full md:w-[347px]">
            <h2 className="text-[2.5rem] font-semibold md:max-w-[12ch] text-center md:text-left">
              Get Creative With Golden Generation{" "}
            </h2>
          </div>
          <div>
            <ul className="space-y-[10px] font-semibold w-[90%] ml-auto">
              <li className="list-disc">
                Learn creative skills to achieve your personal and professional
                goals.
              </li>
              <li className="list-disc">
                Go from dabbler to master in a matter of hours
              </li>
              <li className="list-disc">
                Connect with a global community of curious creatives.
              </li>
              <li className="list-disc">
                Tune in and level up at your own pace.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#22262F] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 mx-8 my-8 md:my-[70px] md:mx-[100px] gap-[30px]">
            <div className="uppercase text-white bg-[#3498DB] p-6 font-bold text-[27px] max-w-[380px] mx-auto sm:mx-0">
              4 Local Govt. outreach
            </div>
            <div className="uppercase text-white bg-[#3498DB] p-6 font-bold text-[27px] max-w-[380px] mx-auto sm:mx-0">
              20+ School Outreach
            </div>
            <div className="uppercase text-white bg-[#3498DB] p-6 font-bold text-[27px] max-w-[380px] mx-auto sm:mx-0">
              500+ Students Impact
            </div>
            <div className="uppercase text-white bg-[#3498DB] p-6 font-bold text-[27px] max-w-[380px] mx-auto sm:mx-0">
              10+ Leading Members
            </div>
            <div className="uppercase text-white bg-[#3498DB] p-6 font-bold text-[27px] max-w-[380px] mx-auto sm:mx-0">
              100+ Growing Members
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full mx-auto space-y-[10px] flex flex-col items-center pt-[72px] pb-[91px]">
          <h1 className="text-4xl font-semibold text-center">
            Our Serving Executives
          </h1>
          <p className="text-center font-semibold max-w-[64ch]">
            Golden Generation programs are being organized by a body of
            individuals passionate about community development and are excited
            to share their experience, techniques, and professional journeys
            with you.
          </p>
          <div className="relative">
            <div className="absolute bg-primary hidden md:flex w-full h-1/3 top-1/3 -z-10 mt-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto w-[90%] max-w-md md:max-w-6xl mt-10 md:mt-20">
              <div className="bg-[#F9F9F9] shadow rounded-lg flex flex-col items-center px-4">
                <div className="my-[25px]">
                  <Image src={team1} alt="President" />
                </div>
                <div className="flex flex-col items-center mb-6">
                  <h3>Jimoh Lawal Akinlabi</h3>
                  <h4>President</h4>
                </div>
                <p className="text-center mb-10">
                  The president of our dear organization and the CEO, Elite
                  Computer Technologies
                </p>
              </div>
              <div className="bg-[#F9F9F9] shadow rounded-lg flex flex-col items-center px-4">
                <div className="my-[25px]">
                  <Image src={team2} alt="Coordinator" />
                </div>
                <div className="flex flex-col items-center mb-6">
                  <h3>Adebayo Faruq Bayo</h3>
                  <h4>Coordinator</h4>
                </div>
                <p className="text-center mb-10">
                  The organization current coordinator and the technical team
                  content creator
                </p>
              </div>
              <div className="bg-[#F9F9F9] shadow rounded-lg flex flex-col items-center px-4">
                <div className="my-[25px]">
                  <Image src={team3} alt="President" />
                </div>
                <div className="flex flex-col items-center mb-6">
                  <h3>Abdrahman Adebayo Oladimeji</h3>
                  <h4>Asst. Coordinator</h4>
                </div>
                <p className="text-center mb-10">
                  The organization assistance coordinator and one of the
                  technical team frontend developers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90%] max-w-[1200px] mx-8 md:mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 mt-10 mb-16 md:mt-[60px] md:mb-[100px]">
        <div className="space-y-6 w-full md:w-3/5">
          <h1 className="text-4xl font-semibold font-Poppins text-center">
            Golden Generation For You
          </h1>
          <p className="text-xl font-Roboto">
            Set yourself up for success with reimagined learning to empower you
            personal and professional growth. With inspiring classes on soft
            skills, business essentials, well-being and more, you will have a
            deep knowledge and expertise at your fingertips.
          </p>
          <button className="uppercase py-[15px] px-[22px] bg-[#3498DB] text-white font-Roboto text-[19px]">
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
      <section className="w-[90%] max-w-[1200px] mx-auto space-y-10 md:space-y-16 mb-16">
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
              School Students
            </p>
            <button className="uppercase py-[15px] px-[22px] bg-[#3498DB] text-white font-Roboto text-[19px] w-full text-center">
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
              Senior Secondary School Students
            </p>
            <button className="uppercase py-[15px] px-[22px] bg-[#3498DB] text-white font-Roboto text-[19px] w-full text-center">
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
              Senior Secondary School Students
            </p>
            <button className="uppercase py-[15px] px-[22px] bg-[#3498DB] text-white font-Roboto text-[19px] w-full text-center">
              Register
            </button>
          </div>
        </div>
      </section>
      <section className="w-[90%] max-w-[1200px] mx-auto space-y-10 md:space-y-16 mb-16">
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
    </main>
  );
}
