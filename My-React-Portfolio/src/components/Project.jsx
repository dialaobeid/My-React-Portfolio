import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} className='project-image' />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <br />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;