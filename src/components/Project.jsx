import React from 'react';

const Project = ({ title, description, imageUrl, projectUrl, repoUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;