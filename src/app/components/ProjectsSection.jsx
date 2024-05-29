"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Digitan Website",
    description: "Web Pembiyaan Petani ",
    image: "/images/projects/p2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SILAW Website",
    description: "Web for online legal consultation",
    image: "/images/projects/p1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 3,
    title: "Noms Kopi Meteseh",
    description: "UI/UX Design Noms Kopi Application",
    image: "/images/projects/p4.png",
    tag: ["All", "UI/UX"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "PWK Consultant",
    description: "web company profile of CV. Putra Waluya Karya",
    image: "/images/projects/p3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://pwk-profile-company.netlify.app/",
  },
  {
    id: 5,
    title: "TISSAVH Smart Health Care Monitoring System",
    description: "Diabetic patient monitoring web program from home, created using a combination of laravel and react",
    image: "/images/projects/p5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold   mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="  flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
