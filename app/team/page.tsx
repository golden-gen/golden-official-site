"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { teams } from "./data";
import Link from "next/link";

const page = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-24">
      <div className="px-6 lg:px-20 mx-auto flex flex-col justify-center py-12 gap-4 overflow-x-hidden">
        <div className="bg-[#F4F4F4] px-6 py-4">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-between font-Roboto"
          >
            <p className="font-bold">Team</p>
            <p className="font-bold">GG{currentYear}</p>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 my-10">
          <motion.span
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-2xl mb-20"
          >
            Meet few of our team members
          </motion.span>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap justify-center items-center mx-auto gap-x-12 gap-y-20"
          >
            {teams.map((team) => {
              return (
                <div key={team.id} className="w-full md:w-[20.6rem]">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-8 items-center">
                      <img src={team.img} alt="not seen" />
                      <div>
                        <p className="font-semibold font-Roboto">
                          {team.member}
                        </p>
                        <p className="text-[#3498DB] font-OpenSans font-semibold">
                          {team.title}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-Roboto">{team.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="relative w-full pt-6 pb-6 md:pb-24 mt-6 md:mt-16"
          >
            <img
              src="/images/medals.png"
              alt="not seen"
              className="w-full lg:h-auto md:h-[35rem] h-[30rem]"
            />
            <p className="absolute top-16 md:right-16 right-2 md:w-[35rem] text-xl font-Roboto space-y-4">
              {`“Building a stronger community is not just about bricks and
                mortar; it's about weaving dreams, fostering unity, and
                cultivating a legacy of shared empowerment. Together, we're
                architects of positive change, constructing a future where every
                voice resonates, and every individual contributes to the
                masterpiece of community development."`}
            </p>
            <p className="absolute bottom-16 md:top-64 md:right-20 right-1 text-xl font-Roboto space-y-4">{`“Unknown”`}</p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-center items-center mb-8"
          >
            <img src="/images/Vector 29.png" alt="not seen" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="font-Roboto mb-20 text-center"
            id="sponsors"
          >
            <h2 className="text-4xl">Meet our Sponsors</h2>
            <p className="mt-4 text-center">
              No sponsor yet, you can become one by{" "}
              <Link
                href="/donate"
                className="underline underline-offset-4 hover:text-primary"
              >
                donating now
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
