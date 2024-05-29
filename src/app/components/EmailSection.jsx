"use client";
import React, { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TiktoknIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  
  return (
    <motion.div
      id="contact"
      ref={ref}
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative "
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-600 to-transparent rounded-full h-80 w-80 z-0 blur-3xl absolute top-1/4 left-28 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold   my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-gray-700 mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/herinta">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/herinta-armantya/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          
        </div>
      </div>
      <div>
        
          <form className="flex flex-col" >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="  block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className=" border border-[#33353F]  text-gray-600 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="  block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="border border-[#33353F]  text-gray-600 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="  block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border border-[#33353F] text-gray-600 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <a
            href="http://wa.me/6288983013546"
              className="bg-secondary-500 hover:bg-[#FC819E] text-white text-center font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </a>
          </form>
      </div>
    </motion.div>
  );
};

export default EmailSection;
