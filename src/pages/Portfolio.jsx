import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section className="portfolio">
    <h2>My Projects</h2>
    <div className="project-list">
      <Project 
        title="Project One" 
        description="This is a brief description of Project One." 
        imageUrl="/images/project1.png" 
        projectUrl="https://example.com/project-one"
        repoUrl="https://github.com/username/project-one"
      />
      <Project 
        title="Project Two" 
        description="This is a brief description of Project Two." 
        imageUrl="/images/project2.png" 
        projectUrl="https://example.com/project-two"
        repoUrl="https://github.com/username/project-two"
      />
      <Project 
        title="Project Three" 
        description="This is a brief description of Project Three." 
        imageUrl="/images/project3.png" 
        projectUrl="https://example.com/project-three"
        repoUrl="https://github.com/username/project-three"
      />
      {/* Add more <Project /> components as needed */}
    </div>
  </section>
);

export default Portfolio;