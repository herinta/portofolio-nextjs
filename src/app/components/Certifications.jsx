"use client";
import TabButton from './TabButton';
import React, { useTransition, useState } from "react";

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

const Certifications = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
  
  return (
    <section>
        <div className="flex flex-row justify-center mt-8">
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
          <div className="mt-8   h-64">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
    </section>
  )
}

export default Certifications
