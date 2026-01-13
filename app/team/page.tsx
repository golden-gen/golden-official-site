"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/src/utils/variants";
import {
  nationalTeam,
  localTeam,
  internationalTeam,
} from "@/src/features/team/structureData";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle, FaLinkedin } from "react-icons/fa";

const TeamPage = () => {
  const currentYear = new Date().getFullYear();
  const [activeTab, setActiveTab] = useState<
    "National" | "Local" | "International"
  >("National");
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const getTeamData = () => {
    switch (activeTab) {
      case "National":
        return nationalTeam;
      case "Local":
        return localTeam;
      case "International":
        return internationalTeam;
      default:
        return nationalTeam;
    }
  };

  return (
    <div className="mt-24">
      <div className="px-6 lg:px-20 mx-auto flex flex-col justify-center py-12 gap-4 overflow-x-hidden">
        <div className="bg-[#F4F4F4] px-6 py-4 rounded-lg">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-between font-Roboto items-center"
          >
            <p className="font-bold text-lg text-gray-800">
              Organization Structure
            </p>
            <p className="font-bold text-primary">GG{currentYear}</p>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 my-10">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl font-bold font-Roboto text-center mb-2 text-gray-900"
          >
            Meet Our Team
          </motion.h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8">
            The dedicated individuals working behind the scenes to drive our
            mission forward.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["International", "National", "Local"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab as any);
                  setExpandedMember(null);
                }}
                className={`px-8 py-3 rounded-full font-Roboto font-medium transition-all duration-300 shadow-sm ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-md transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md border border-gray-100"
                }`}
              >
                {tab} Team
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            variants={fadeIn("up", 0.2)}
            initial={"hidden"}
            animate={"show"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full"
          >
            <AnimatePresence>
              {getTeamData().map((member, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white hover:bg-gray-50 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center text-center group relative overflow-hidden h-full transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative mb-6 mt-4">
                    {member.image ? (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-40 h-40 relative rounded-full overflow-hidden border-[6px] border-white shadow-lg"
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-40 h-40 rounded-full flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 shadow-inner overflow-hidden relative"
                      >
                        <FaUserCircle className="w-32 h-32 text-primary/80 transition-colors duration-300" />
                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    )}

                    {/* LinkedIn Button Overlay */}
                    <div className="absolute bottom-4 left-0 w-full flex justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <Link
                        href={member.linkedin || "#"}
                        target="_blank"
                        className="bg-white p-2.5 rounded-full shadow-lg text-[#0077b5] hover:scale-110 hover:shadow-xl transition-all duration-200"
                        title="Connect on LinkedIn"
                      >
                        <FaLinkedin size={22} />
                      </Link>
                    </div>
                  </div>

                  <h3 className="font-bold text-xl font-Roboto text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-gray-800 font-medium font-OpenSans text-base mb-4 relative inline-block">
                    {member.position}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </p>

                  {member.bio && (
                    <div className="mt-2 w-full">
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 mb-3">
                        {member.bio}
                      </p>
                      <Link
                        href={member.linkedin || "#"}
                        target="_blank"
                        className="text-primary text-sm font-bold inline-flex items-center gap-1 hover:gap-2 transition-all duration-300 group/link"
                      >
                        Read More
                        <span className="text-lg leading-none group-hover/link:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  )}

                  {!member.bio && (
                    <div className="mt-4 w-12 h-1 bg-gray-100 rounded-full group-hover:bg-primary/30 transition-colors duration-300"></div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-20 text-center bg-gradient-to-br from-[#F9F9F9] to-white p-10 rounded-2xl w-full max-w-4xl mx-auto shadow-lg border border-gray-50">
            <h3 className="text-2xl font-bold font-Roboto mb-4 text-gray-800">
              Join Our Community
            </h3>
            <p className="mb-8 text-gray-600 max-w-lg mx-auto">
              Would you love to make an impact by becoming one of us? We are
              always looking for passionate individuals to join our cause.
            </p>
            <Link
              href={"/register"}
              className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-dark-primary hover:shadow-lg transition-all duration-300 uppercase tracking-wide transform hover:-translate-y-1"
            >
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
