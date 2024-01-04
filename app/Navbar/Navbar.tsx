'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  })

  // set nav items
  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About Us', path: '/about' },
    { link: 'Gallery', path: '/gallery' },
    { link: 'Blog', path: '/blog' },
    { link: 'Team', path: '/team' },
  ]
  return (
    <header className="w-full bg-white shadow-lg md:bg-transparent fixed top-0 left-o right-0 z-[100]">
      <nav
        className={`py-6 lg:px-20 px-6 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 border bg-white duration-300 shadow-lg'
            : ''
        }`}
      >
        <div className="flex justify-between items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-semibold flex items-center space-x-1"
          >
            <span className="font-bold text-3xl font-SpaceGro">
              GOLDEN GENERATION
            </span>
          </Link>

          <ul className="md:flex items-center space-x-12 hidden font-Roboto gap-4">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className="block cursor-pointer text-lg hover:text-[#3498DB] font-bold"
              >
                {item.link}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="#" className="bg-[#3498DB] text-white p-4 font-bold">
                Donate
              </Link>
            </motion.button>
          </ul>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus::outline-none">
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices  */}
        <div
          className={`space-y-4 mt-20 px-4 py-7 bg-[#F9F9F9] z-3 ${
            isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'
          }`}
        >
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className="block text-lg hover:text-[#3498DB] first::font-medium font-Roboto"
            >
              {item.link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
