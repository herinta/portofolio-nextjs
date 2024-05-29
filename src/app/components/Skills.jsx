"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsData = [
  { src: "/images/html.png", width: 80, height: 100, alt: "HTML" },
  { src: "/images/css.png", width: 80, height: 100, alt: "CSS" },
  { src: "/images/js.png", width: 80, height: 100, alt: "JavaScript" },
  { src: "/images/react.png", width: 80, height: 100, alt: "React" },
  { src: "/images/next.png", width: 80, height: 100, alt: "Next.js" },
  { src: "/images/tailwind.png", width: 80, height: 100, alt: "Tailwind CSS" },
  { src: "/images/sql.png", width: 80, height: 100, alt: "SQL" },
];

const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold to your preference
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="px-4 ">
      <motion.div
        ref={ref}
        variants={skillVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="bg-white py-8 px-16 flex flex-col sm:flex-row items-center w-full justify-between shadow-xl rounded-xl gap-10">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              ref={ref}
              variants={skillVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.1 }}
              className="m-2"
            >
              <Image
                alt={skill.alt}
                src={skill.src}
                width={skill.width}
                height={skill.height}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;