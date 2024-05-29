"use client";
import React, { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import AchievementsSection from "./AchievementsSection";

const AboutSection = () => {
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
    <section id="about" className="pt-28">
      <div
        ref={ref}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <Image src="/images/about-image.jpeg" width={500} height={500} />
        </motion.div>
        <motion.div
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an expert who specializes in custom website development using
            React.js and creating beautiful UI/UX designs. With our dedication
            to cutting-edge technology and thoughtful design, we are ready to
            help you realize your vision. We believe that an attractive and
            high-performing website is the key to online success, and we will
            work tirelessly to deliver the best results for your project.
            Customer support is our top priority, and we are committed to
            ensuring your satisfaction every step of the way.
          </p>
          <div className="w-full">
            <AchievementsSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
