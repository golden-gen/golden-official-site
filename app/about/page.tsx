"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function AboutPage() {
  return (
    <main className="mt-28">
      <div className="px-8 md:px-20 flex flex-col justify-center md:max-w-screen-2xl mx-auto overflow-x-hidden">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl font-bold font-Roboto">About Us</h1>
        </motion.div>
        <div className="flex flex-col gap-2 justify-center items-center mb-8 md:mb-40">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-2xl px-4 md:px-0 font-semibold font-SpaceGro md:max-w-sm w-full text-center mb-4"
          >
            Golden Generation Community Development Club
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 flex font-Roboto text-lg"
          >
            Welcome to the Golden Generation Community Development Club, where
            compassion meets action, and change begins at the grassroots level.
            Established in 2015, our organization is driven by a shared belief
            in the power of community-driven development to create lasting and
            meaningful change. Our organization provides and related technology.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mx-auto gap-4">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-capitalize text-2xl md:text-4xl font-semibold font-Roboto py-4">
              OUR AIM
            </h1>
            <div className="relative md:w-[530px] w-[16rem] h-[28rem] md:h-[458px] bg-[#F9F9F9] flex items-center justify-center mx-auto container">
              <p className="w-32">To build youths and teenagers for humanity</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col gap-4 mb-16"
          >
            <h1 className="text-capitalize text-2xl md:text-4xl font-semibold font-Roboto py-4">
              OUR OBJECTIVES
            </h1>
            <div className="relative bg-[#F9F9F9] md:w-[530px] w-[16rem] h-[28rem] md:h-[458px] flex items-center justify-center mx-auto contain">
              <p className="w-[27.875rem] px-8 font-Roboto">
                To build youth and teenagers for humanities,
                <br /> To brighten the future of generation <br /> To eradicate
                poverty among youth <br /> To identify, recognize and make use
                of the <br /> talent of our youths for society development.
                <br /> To be useful for ourselves, community and all kind.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="relative flex md:flex-col flex-wrap flex-row items-center justify-center mx-auto w-full mt-6 md:mt-12 md:mb-36 mb-10"
        >
          <img src="/images/Mask group.png" alt="not seen" />
          <img
            src="/images/school bag purple and green.png"
            alt=""
            className="block md:absolute -bottom-40 left-48"
          />
          <img
            src="/images/Vector 28.png"
            alt=""
            className="block md:absolute -bottom-20 right-36"
          />
        </motion.div>
        <div
          id="ggquiz"
          className="flex flex-col font-Roboto items-center justify-center gap-8 mt-6 md:mt-20 md:mb-20 mb-8"
        >
          <motion.h1
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl font-semibold text-[#4F4E4E]"
          >
            Popular GGQuiz
          </motion.h1>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col md:w-[67.5rem] items-center justify-center mx-auto bg-[#F9F9F9] border border-1 border-[#E1E1E1] rounded-lg py-12"
          >
            <h3 className="md:w-[33.81rem] font-semibold text-[#4F4E4E] text-lg text-center">
              Registration Status: The registration is currently opened.
            </h3>
            <h3 className="md:w-[33.81rem] font-semibold text-[#4F4E4E] text-lg text-center">
              Eligility Criteria: To be eligible to apply, you must
              be in any of the classes SS 1, SS 2 or SS 3 in any secondary
              school (Private and Public) in Nigeria. The registration form must
              be filled and submitted online via{" "}
              <Link href="/ggquiz-2024" className="underline underline-offset-4">GGQUIZ 2024</Link>.
            </h3>
          </motion.div>
        </div>
        
      </div>
    </main>
  );
}
