import React from 'react';
import profilePic from '../assets/images/profile-pic.jpg';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profilePic} alt="Profile" />
      <p>Short bio about yourself...</p>
    </section>
  );
}

export default About;