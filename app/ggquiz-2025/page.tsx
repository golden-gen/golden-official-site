"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import RegistrationForm from "./form";

export default function GGQUIZ2025() {
  return (
    <main className="mt-28">
      <div className="px-8 md:px-20 flex flex-col justify-center md:max-w-screen-2xl mx-auto overflow-x-hidden">
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
            className="hidden md:block md:absolute -bottom-40 left-48"
          />
          <img
            src="/images/Vector 28.png"
            alt=""
            className="hidden md:block md:absolute -bottom-20 right-36"
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
            className="text-4xl font-semibold text-[#4F4E4E] text-center"
          >
            Golden Generation Quiz 2025
          </motion.h1>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col items-center justify-center mx-auto bg-[#F9F9F9] border border-1 border-[#E1E1E1] rounded-lg py-12"
          >
            <h3 className="md:w-[33.81rem] font-semibold text-[#4F4E4E] text-base md:text-lg text-center">
              Registration Status: The registration is currently opened.
            </h3>
            <h3 className="md:w-[33.81rem] font-semibold text-[#4F4E4E] text-base md:text-lg text-center p-4">
              Eligility Criteria: To be eligible to apply, you must at that time
              be in any of the classes SS 1, SS 2 or SS 3 in any secondary
              school (Private and Public) in Nigeria. The registration form
              below must be filled and submitted.
            </h3>
          </motion.div>
        </div>
        <RegistrationForm />
        <div className="hidden flex-col justify-center mx-auto gap-4">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col items-center capitalize font-Roboto gap-2"
          >
            <h1 className="font-bold text-2xl">Rules of the Competition</h1>
            <h2 className="text-lg">
              You are advised to take note of the following:
            </h2>
          </motion.div>
          <motion.ul
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="list-decimal font-Roboto text-[#4F4E4E] flex flex-col md:w-[67.5rem] bg-[#F9F9F9] py-4 md:py-10 px-6 md:px-12 capitalize rounded-lg mb-12"
          >
            <div className="md:w-[50.08rem] text-xl space-y-4 pl-4">
              <li>
                To register, applicants must currently be enrolled in any
                secondary school in Nigeria.
              </li>
              <li>
                Each school should register at most two (2) applicants to
                represent the school in the Debating competition through the
                link:{" "}
                <Link href="#" className="underline underline-offset-2">
                  To be announced when competition is opened
                </Link>
              </li>
              <li>
                Any interested student should register for the Quiz competition
                using the link:{" "}
                <Link href="#" className="underline underline-offset-2">
                  To be announced when competition is opened
                </Link>
                .
              </li>
              <li>
                All applicants must fill and complete the online application
                form correctly to avoid disqualification.
              </li>
              <li>Application Portal Opens - TBA and Closes - TBA</li>
              <li>
                Peradventure there is a tie in the debate scores; extra minute
                will be given to further supplement their points in order to
                determine the winners.
              </li>
              <li>
                Winners will be officially recognized and awarded immediately at
                the end of the competition.
              </li>
              <li>
                The decision of the panel of judges is final and is not subject
                to any form of appeal with regards to selection of finalists.
              </li>
            </div>
          </motion.ul>
        </div>
      </div>
    </main>
  );
}
