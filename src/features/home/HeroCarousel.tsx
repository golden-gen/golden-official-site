"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@/src/components/svg";

export const HeroCarousel = () => {
  const { push } = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Golden Generation Annual Competition",
      subtitle:
        "Participate in the ongoing GGQuiz 2025 and showcase your knowledge.",
      tagline: "Be part of the challenge!",
      actionText: "Register Now",
      actionLink: "/ggquiz-2025",
    },
    {
      title: "Every Home Deserves a Golden Child",
      subtitle:
        "Welcome to the official website of Golden Generation Community Development Club (GGCDC).",
      tagline: "...the future is our concern.",
      actionText: "Join Us Now",
      actionLink: "/register",
    },
    {
      title: "Donate to Support Our Cause",
      subtitle:
        "Help us create a brighter future with your generous donations.",
      tagline: "Your support matters.",
      actionText: "Donate Now",
      actionLink: "/donate",
    },
  ];

  const backgrounds = ["bg-hero3", "bg-hero", "bg-hero2"];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={`${backgrounds[currentSlide]} transition-all duration-500 ease-in-out relative h-full min-h-screen bg-[#010101]/60 bg-center md:bg-top bg-no-repeat bg-cover bg-blend-multiply flex flex-col justify-center items-center py-20`}
    >
      <div className="overflow-hidden w-full max-w-5xl mx-auto">
        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="min-w-full flex flex-col items-center space-y-6 text-center"
            >
              <Image
                src="/logo.jpg"
                alt="Golden Generation Logo"
                className="rounded-full mb-4"
                width={currentSlide === idx ? 200 : 100}
                height={currentSlide === idx ? 200 : 100}
              />
              <h1 className="uppercase font-semibold text-4xl md:text-[4.375rem] md:leading-tight 2xl:text-[7.375rem] text-white max-w-[26ch]">
                {slide.title}
              </h1>
              <h3 className="font-semibold text-sm md:text-2xl 2xl:text-4xl text-white max-w-[40ch]">
                {slide.subtitle}
              </h3>
              <p className="font-serif text-sm md:text-xl 2xl:text-3xl mb-2 text-white">
                <em>{slide.tagline}</em>
              </p>
              <button
                onClick={() => push(slide.actionLink)}
                className="py-[15px] px-[22px] bg-primary hover:bg-dark-primary transition duration-200 text-white font-Roboto font-bold text-lg w-fit uppercase"
              >
                {slide.actionText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-none top-none lg:top-1/2 flex justify-between w-full h-fit px-8">
        <button
          className="text-white font-bold text-lg border border-white px-3 py-2 hover:bg-gray transition duration-200 active:scale-90 rotate-180"
          onClick={handlePrev}
          aria-label="previous"
        >
          <ArrowRight />
        </button>
        <button
          className="text-white font-bold text-lg border border-white px-3 py-2 hover:bg-gray transition duration-200 active:scale-90"
          onClick={handleNext}
          aria-label="next"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            onClick={() => setCurrentSlide(idx)}
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-white" : "bg-grey/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
