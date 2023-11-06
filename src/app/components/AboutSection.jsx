"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        
        <li>UI/UX</li>
        <li>HTML, CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
 
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Oracle : Database Programming With SQL</li>
        <li>Basic Programming Web</li>
        <li>Fundamental ReactJS</li>
      </ul>
    ),
  },
  {
    title: "Award",
    id: "award",
    content: (
      <ul className="list-disc pl-2">
        <li>2nd APSI Game Programming Competition</li>
        <li>2nd National Web Programming Competition</li>
        <li>2nd Permata Youth Preneur National Competition</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
          We are a team of experts specializing in custom website development using React.js and 
          crafting captivating UI/UX designs. With our dedication to cutting-edge technology and 
          meticulous design, we are ready to help you bring your vision to life. We believe that 
          an attractive and high-performance website is the key to online success, and we will 
          work tirelessly to deliver the best results for your project. Customer support is our top priority, and we're committed to ensuring your satisfaction every step of the way.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("award")}
              active={tab === "award"}
            >
              {" "}
              Award{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
