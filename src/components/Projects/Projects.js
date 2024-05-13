import React from "react";
import Project from "../Project/Project";
import "./projects.css";
import gpt3 from "../../assets/gpt3.jpg";
import gericht from "../../assets/gericht.jpg";

const Projects = () => {
  return (
    <div className="app__projects section__padding" id="Projects">
      <div className="app__projects-content">
        <div className="app__projects-content-title">
          <h1>Featured Projects</h1>
        </div>
        <div className="app__projects-content-p">
          <p>Have a look at work and try out web pages I’ve built.</p>
        </div>
      </div>

      <div className="app_projects-container">
        <Project
          imgUrl={gpt3}
          text="GPT3 Project"
          par="Welcome to the GPT-3 project showcase! Dive into the future of AI-powered creativity and innovation with my GPT-3 landing page."
          link="https://master--gpt3-project-modern.netlify.app/"
        />
        <Project
          imgUrl={gericht}
          text="Gericht Restaurant Project"
          par="Experience the artistry of food and hospitality come alive on this captivating landing page. "
          link="https://gericht-restaurant.website/"
        />
      </div>
    </div>
  );
};

export default Projects;
