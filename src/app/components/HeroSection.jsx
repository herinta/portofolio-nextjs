"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-36 container mt-10 mx-auto px-12 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 sm:order-2 place-self-center mt-4 lg:mt-0 relative"
        >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-600 to-transparent rounded-full h-80 w-80 blur-3xl absolute top-[80%] left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden md:flex"></div>
          
          <div className="half-circle bg-white w-[250px] h-[250px] lg:w-[500px] lg:h-[550px] relative mb-16 md:mb-0">
          <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 sm:order-1 place-self-center text-center sm:text-left justify-center md:justify-self-start"
        >
          <h1 className="hero-title mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC819E] to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Herinta ",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mb-6 lg:text-3xl">
            Junior Front End Web Developer
          </p>
          <div>
            <Link
              href="http://wa.me/6288983013546"
              className="text-white px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#FC819E] to-secondary-500 hover:bg-slate-200"
            >
              Hire Me
            </Link>
            <Link
              href="#projects"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#FC819E] to-secondary-500  mt-3"
            >
              <span className="block bg-white rounded-full px-5 py-2">
                Check My Porto
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
