import React from 'react';
import Project from './Project';
import project1Image from '../assets/images//Project1.jpg';
import project2Image from '../assets/images//Project.jpg';

function Portfolio() {
  const projects = [
    {
      // title: 'Project 1',
      image: project1Image,
      deployedLink: 'https://young-bayou-05349-1a4b47be4457.herokuapp.com/',
      githubLink: 'https://github.com/dialaobeid/FitTrack',
    },

    {
     // title: 'Project 2',
      image: project2Image,
      deployedLink: 'https://nimo20.github.io/Geek-Humor/',
      githubLink: 'https://github.com/Nimo20/Geek-Humor',
    }
  ];

  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;