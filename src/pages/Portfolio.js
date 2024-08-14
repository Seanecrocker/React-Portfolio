import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployedLink: 'https://link-to-project-1.com',
      githubLink: 'https://github.com/your-repo/project-1'
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;