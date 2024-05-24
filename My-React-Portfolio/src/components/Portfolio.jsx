import React from 'react';
import Project from './Project';
import project1Image from '../assets/images//Project1.jpg';
import project2Image from '../assets/images//Project2.jpg';
import project3Image from '../assets/images//Project3.jpg';
import project4Image from '../assets/images//Project4.jpg';
import project5Image from '../assets/images//Project5.jpg';
import project6Image from '../assets/images//Project6.jpg';

function Portfolio() {
  const projects = [
    {
       title: 'Project 1',
      image: project1Image,
      deployedLink: 'https://young-bayou-05349-1a4b47be4457.herokuapp.com/',
      githubLink: 'https://github.com/dialaobeid/FitTrack',
    },

    {
      title: 'Project 2',
      image: project2Image,
      deployedLink: 'https://nimo20.github.io/Geek-Humor/',
      githubLink: 'https://github.com/Nimo20/Geek-Humor',
    },

    {
       title: 'Project 3',
       image: project3Image,
       deployedLink: 'https://dialas-pwa-text-editor.onrender.com/',
       githubLink: 'https://github.com/dialaobeid/Dialas-PWA-Text-Editor',
     },

     {
       title: 'Project 4',
       image: project4Image,
       deployedLink: 'https://secure-harbor-04337-db2a2516c78a.herokuapp.com/notes',
       githubLink: 'https://github.com/dialaobeid/My-Note-Taker/tree/main',
     },

     {
       title: 'Project 5',
       image: project5Image,
       deployedLink: 'https://github.com/dialaobeid/Portfolio-Challenge/tree/main',
       githubLink: 'https://dialaobeid.github.io/Portfolio-Challenge/',
     },

     {
       title: 'Project 6',
       image: project6Image,
       deployedLink: 'https://dialaobeid.github.io/Dialas-Weather-Dashboard/',
       githubLink: 'https://github.com/dialaobeid/Dialas-Weather-Dashboard',
     },
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