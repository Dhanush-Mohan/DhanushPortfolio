import React from "react";
import { project } from "./utils";
import ProjectCard from "../Cards/ProjectCard";
import "./projects.css";

const Projects = () => {
  return (
    <div className="main">
      <section className="project section">
        <div className="title">
          <span className="projectTitle">My Projects</span>
        </div>
        <br/>
        <div className="project__container container grid">
          {project.map((item) => {
            return <ProjectCard key={item.id} {...item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
