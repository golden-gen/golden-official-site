import React from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../svg";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#22262F] w-full">
      <div className="flex flex-col w-[95%] max-w-[1300px] mx-auto pt-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-12 mb-[60px] gap-0 md:gap-8 place-items-start items-start">
          {/* Logo and Description */}
          <div className="col-span-3 order-3 md:order-1 flex flex-col gap-4 mr-4">
            <Link
              href="/"
              className="text-2xl font-semibold flex items-center space-x-1"
            >
              <span className="text-white font-bold text-xl md:text-2xl lg:text-3xl items-center font-SpaceGro">
                GOLDEN GENERATION
              </span>
            </Link>
            <p className="text-white font-Poppins">
              Set yourself up for success by becoming a golden member for your
              personal and professional growth.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-4 sm:grid-cols-6 col-span-6 order-2 mb-[60px] md:mb-0 gap-6">
            {/* Quick Links */}
            <div className="col-span-2">
              <h2 className="text-white pb-4 font-SpaceGro">Quick Links</h2>
              <div className="flex flex-col gap-2 text-grey">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/team">Team</Link>
              </div>
            </div>
            {/* Get in Touch */}
            <div className="col-span-2 order-3 sm:order-2">
              <h2 className="text-white pb-4 font-SpaceGro">Get in Touch</h2>
              <div className="flex flex-col gap-2 font-Roboto text-grey">
                <Link href="/contact">Contact Us</Link>
                <Link href="/gallery">Gallery</Link>
              </div>
            </div>
            {/* Address */}
            <div className="col-span-2 order-2 sm:order-3">
              <h2 className="text-white pb-4">Address</h2>
              <div className="flex flex-col text-white sm:w-fit">
                <p className="text-grey">
                  Shop No. 32-33 Durbar Stadium Shopping Complex, Durbar, Oyo.
                  Oyo State, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter and Social Links */}
          <div className="col-span-3 order-1 md:order-3 mb-[60px] md:mb-0 ">
            <div className="flex flex-row gap-0 items-center mb-4 bg-white rounded-xl">
              <input
                type="text"
                placeholder="Enter your Email"
                className="text-gray placeholder:text-gray bg-transparent border-none outline-none p-2 pl-3 py-3 sm:p-4 flex"
              />
              <button className="text-white w-full h-full bg-primary p-2 py-3 sm:p-4">
                Subscribe
              </button>
            </div>
            <h2 className="text-ccc font-Roboto">
              Your email is safe with us,we don&apos;t spam.
            </h2>
            <h2 className="text-white font-Roboto py-2 text-lg font-bold ">
              Follow Us
            </h2>
            <div className="flex flex-row gap-2 w-full items-center">
              <Link href="#">
                <TwitterIcon />
              </Link>
              <Link href="#">
                <LinkedinIcon />
              </Link>
              <Link href="#">
                <FacebookIcon />
              </Link>
              <Link href="/">
                <span className="text-white font-bold text-[20px]/[16.43px] font-Roboto">
                  GOLDEN GENERATION
                </span>
              </Link>
            </div>
          </div>
        </div>

        <hr className="text-grayish w-full hidden md:flex mb-10" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-center mb-4 md:mb-8">
          <p className="text-grayish mb-[27px] md:mb-0 text-center text-sm md:text-lg font-Nunito">
            &copy; Copyright {currentYear} Golden Generation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
