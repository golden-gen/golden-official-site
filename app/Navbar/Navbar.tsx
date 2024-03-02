"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaXmark, FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      window.addEventListener("scroll", handleScroll);
    };
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();

  // set nav items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Gallery", path: "/gallery" },
    { link: "Blog", path: "/blog" },
    { link: "Team", path: "/team" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`py-2 md:py-6 lg:px-20 px-6 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white text-black duration-300 shadow-lg"
            : `${pathname === "/" ? "md:text-white" : "text-black"} shadow-none`
        }`}
      >
        <div className="flex justify-between items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-semibold flex items-center space-x-2"
          >
            <Image
              src="/logo.jpg"
              alt="Golden Generation Logo"
              className="rounded-full block md:hidden"
              width={30}
              height={30}
            />
            <Image
              src="/logo.jpg"
              alt="Golden Generation Logo"
              className="rounded-full hidden md:block"
              width={40}
              height={40}
            />
            <span className="flex lg:hidden font-bold text-xl md:text-2xl lg:text-3xl items-center font-SpaceGro">
              GGCDC
            </span>
            <span className="hidden lg:flex font-bold text-xl md:text-2xl lg:text-3xl items-center font-SpaceGro">
              GOLDEN GENERATION
            </span>
          </Link>

          <ul className="md:flex items-center md:space-x-8 lg:space-x-10 hidden font-Roboto gap-4">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`block cursor-pointer text-lg hover:text-primary font-bold ${
                  item.path === pathname
                    ? "text-primary underline underline-offset-8 decoration-primary decoration-2"
                    : ""
                }`}
              >
                {item.link}
              </Link>
            ))}
            <Link
              href="/donate"
              className="bg-primary hover:bg-dark-primary transition duration-200 text-white p-4 py-2 font-bold rounded-lg"
            >
              Donate
            </Link>
          </ul>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden pt-2">
            <button onClick={toggleMenu} className="focus::outline-none">
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices  */}
        <div
          className={`space-y-4 mt-[50px] px-4 pt-5 pb-7 bg-[#F9F9F9] z-3 ${
            isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className="block text-lg hover:text-primary first::font-medium font-Roboto"
            >
              {item.link}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="#" className="bg-primary text-white p-4 py-2 font-bold">
              Donate
            </Link>
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
