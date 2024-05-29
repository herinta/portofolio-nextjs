"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    time: "February 2022",
    title: "Application UI code in Tailwind CSS",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    time: "March 2022",
    title: "Marketing UI design in Figma",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
  {
    time: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

const Experience = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-8">
      <div className="w-full py-20 px-10">
        <div className="">
          <h2 className="text-4xl font-bold mb-10 md:mb-20">Experience</h2>
        </div>
        <ol className="relative border-l border-pink-500 ">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </ol>
      </div>
      <div className="w-full py-20 px-10">
        <div className="">
          <h2 className="text-4xl font-bold mb-10 md:mb-20">Education</h2>
        </div>
        <ol className="relative border-l border-pink-500">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </ol>
      </div>
    </div>
  );
};

const ExperienceItem = ({ experience }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="mb-10 ml-4 bg-transparent border border-secondary-200 py-5 px-6 "
    >
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {experience.time}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {experience.title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {experience.description}
      </p>
    </motion.li>
  );
};

export default Experience;
