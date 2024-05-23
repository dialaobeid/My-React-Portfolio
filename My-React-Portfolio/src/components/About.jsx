import React from 'react';
import MyAvatar from '../assets/images/MyAvatar.jpg';

function About() {
  return (
    <section id="about">
      <img src={MyAvatar} alt="My Photo" className="avatar" />
      <h2>About Me</h2>
      <p>Welcome to my professional portfolio! I am a recent graduate from UCI with bachelors degree in Biological Sciences. 
        I am currently pursuing a masters degree. I am also completing a bootcamp to build a career in web development. 
        You can see all the projects I have worked on over the course of the bootcamp under my portfolio.
        My Github and LinkedIn profiles can be found below.
      </p>
    </section>
  );
}

export default About;