"use client";
import Link from "next/link";
import { blogData, blogData1 } from "@/src/features/blog/data";
import { BsStopwatch } from "react-icons/bs";
import { CiLock, CiSearch } from "react-icons/ci";
import { IoDocumentOutline } from "react-icons/io5";
import { FaYoutube, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/variants";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="mt-20">
      <div className="px-6 lg:px-20 mx-auto py-12 gap-4 overflow-x-hidden">
        <div className="bg-[#F4F4F4] px-6 py-4">
          <span className="font-bold font-Roboto">Blog</span>
        </div>
        <div className="flex md:flex-row flex-col md:items-start items-center mx-auto justify-between mt-12 gap-8 md:gap-20">
          <div className="order-2 md:order-1 w-full md:w-3/5 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-8">
            {blogData.map((blog) => (
              <motion.div
                variants={fadeIn("right", 0.1)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                key={blog.id}
                className="flex flex-col gap-3"
              >
                <img
                  src={blog.image}
                  alt=""
                  className="w-full md:h-72 h-full"
                />
                <div className="flex flex-col gap-3 md:pr-0 pr-2">
                  <Link
                    href="/"
                    className="leading-2 h-16 w-full md:w-[12.5rem] font-bold font-Manrope mb-1"
                  >
                    {blog.title}
                  </Link>
                  <div className="flex flex-wrap gap-1 md:gap-2 font-semibold font-Manrope">
                    <div className="flex items-center gap-1">
                      <BsStopwatch />
                      <p>{blog.date}</p>
                    </div>
                    {blog.heading && (
                      <div className="flex items-center gap-1">
                        <CiLock />
                        <p>{blog.heading}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1 items-center font-semibold">
                    <IoDocumentOutline />
                    <Link href={"/"}>{blog.desc}</Link>
                  </div>
                  <div className="md:w-[18.75rem] w-fit font-Roboto font-medium">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      cum, leo ridiculus curabitur euismod gravida feugiat
                      tristique varius eros, quam volutpat mauris lacus fusce
                      turpis sociosqu. osuere ut etiam tortor lacinia. Ante
                      elementum facilisi montes commodo vivamus parturient sem
                      facilisis malesuada
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center mt-4 py-4 w-32 bg-[#3498DB] font-Manrope hover:bg-[#4D4D4D] transition-all duration-300 cursor-pointer"
                  >
                    <button className="text-white text-sm font-semibold">
                      See More
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="order-1 md:order-2 w-full md:w-2/5 flex flex-col">
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="relative border-none outline-none bg-[#FAFAFA] px-1 py-6 w-full md:w-96 mb-4">
                <input
                  type="text"
                  placeholder="Search |"
                  className="border-none outline-none bg-[#FAFAFA] text-xl font-semibold w-full"
                />
                <div className="absolute top-7 right-5 text-xl text-[#888888] cursor-pointer">
                  <CiSearch />
                </div>
              </div>
              <div className="mb-4">
                <h1 className="text-2xl font-bold">Follow Us</h1>
              </div>
              <div className="flex flex-wrap w-full items-center gap-8 text-2xl mb-12">
                <Link href="/" className="flex rounded-full bg-[#EBEBEB] p-2">
                  <FaTwitter />
                </Link>
                <Link href="/" className="flex rounded-full bg-[#EBEBEB] p-2">
                  <FaInstagramSquare />
                </Link>
                <Link href="/" className="flex rounded-full bg-[#EBEBEB] p-2">
                  <FaYoutube />
                </Link>
                <h1 className="text-xl md:text-2xl font-bold font-SpaceGro">
                  GOLDEN GENERATION
                </h1>
              </div>
              <Image
                src="/logo.jpg"
                alt="Golden Generation Logo"
                width="400"
                height="400"
                className="w-full max-w-sm mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
