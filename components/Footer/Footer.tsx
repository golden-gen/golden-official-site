import React from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../svg";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#22262F] w-full">
      <div className="flex flex-col w-[90%] max-w-[1200px] mx-auto pt-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-12 mb-[60px] gap-0 md:gap-8">
          <div className="col-span-3 order-3 md:order-1 flex flex-col gap-5 md:gap-[30px]">
            <div>
              <Link
                href="/"
                className="text-2xl font-semibold flex items-center space-x-1"
              >
                <span className="text-white font-bold text-xl md:text-2xl lg:text-3xl items-center font-SpaceGro">
                  GOLDEN GENERATION
                </span>
              </Link>
            </div>
            <p className="text-white">
              Set yourself up for success with reimagined learning to empower
              your personal and professional growth.
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 col-span-6 order-2 mb-[60px] md:mb-0 gap-6 pt-2">
            <div className="col-span-2">
              <h2 className="text-white pb-[30px] pt-2">Quick Links</h2>
              <div className="flex flex-col text-white space-y-[15px]">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Team</a>
              </div>
            </div>
            <div className="col-span-2 order-3 sm:order-2">
              <h2 className="text-white pb-[30px] pt-2">Get in touch</h2>
              <div className="flex flex-col text-white space-y-[15px]">
                <a href="#">Contact Us</a>
                <a href="#">Gallery</a>
              </div>
            </div>
            <div className="col-span-2 order-2 sm:order-3">
              <h2 className="text-white pb-[30px] pt-2">Address</h2>
              <div className="flex flex-col text-white space-y-[15px]">
                <p>
                  Shop No. 32-33 Durbar Stadium Shopping Complex, Durbar,
                  Oyo.Oyo State.Nigeria
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 pt-4 order-1 md:order-3 mb-[60px] md:mb-0">
            <h2 className="text-white">
              We will only ever send you cool stuff!
            </h2>
            <div className="flex items-center border-b-2 border-[#D9D9D980] py-5 mb-4 gap-4">
              <input
                type="text"
                placeholder="Suscribe To Our NewsLetter"
                className="text-white placeholder:text-rgba(240,240,240,0.70) bg-transparent border-none w-full outline-none"
              />
            </div>
            <div className="flex gap-5">
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <LinkedinIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
        <hr className="text-grayish w-full hidden md:flex mb-10" />
        <div className="flex flex-col md:flex-row justify-center mb-[30px]">
          <p className="text-grayish mb-[27px] md:mb-0 text-center text-sm md:text-lg">
            &copy; Copyright {currentYear} Golden Generation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
