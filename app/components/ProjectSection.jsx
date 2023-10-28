"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This is my portfolio website built with React and Next.js",
    image: "images/portfolio.png",
    tag: ["All", "React", "Next.js"],
    gitUrl: "https://github.com/joscaz",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Caritas de Monterrey iOS App",
    description:
      "iOS app for Caritas de Monterrey, non-profit organization that raises money to help the needy",
    image: "images/projects/2.png",
    tag: ["All", "Swift", "SQL"],
    gitUrl: "https://github.com/joscaz",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Zerlang",
    description: "DSL for Virtual Robot to teach programming",
    image: "images/projects/1.png",
    tag: ["All", "React", "Next.js"],
    gitUrl: "https://github.com/joscaz",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Call of Zertuche: Zombies",
    description: "This is my portfolio website built with React and Next.js",
    image: "images/portfolio.png",
    tag: ["All", "C++", "Unity"],
    gitUrl: "https://github.com/joscaz",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "2D Regal Rexnord business simulation",
    description:
      "2D business simulation for Regal Rexnord to improve internal processes",
    image: "images/projects/3.png",
    tag: ["All", "React", "Unity", "DjangoREST"],
    gitUrl: "https://github.com/joscaz",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
