import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>

      <h3>Proficiencies</h3>
      <ul>
        {/* proficiencies below */}
        <li>Problem Solving</li>
        <li>Teamwork</li>
        <li>Leadership</li>
      </ul>

      <a href="path/to/your/resume.pdf" download>Download Resume</a>
    </section>
  );
}

export default Resume;