import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section className="portfolio">
    <h2>My Projects</h2>
    <div className="project-list">
      <Project 
        title="Project One" 
        description="Project one project where a group of collaborators needed to come up with a real-world problem 
        that could be solved with code. The problem being solved in this project is a way for electric car owners to quickly find a 
        charging station to charge their car. This project included, javascript, html, css, tomtom api, and opan charge api." 
        imageUrl="/images/project1.png" 
        projectUrl="https://mackemo.github.io/project-1-charge-car/"
        repoUrl="https://github.com/mackemo/project-1-charge-car"
      />
      <Project 
        title="Project Two" 
        description="Project two is a MERN stack single-page application allowing users to signup and login to save user progress. On the dashboard, 
        a quick description of the game is provided and a button to start the game. For each prompt of the game, users are given two 
        choices to take action that leads the user down a path until an end result is met." 
        imageUrl="/images/project2.png" 
        projectUrl="https://text-based-adventure-game.onrender.com/"
        repoUrl="https://github.com/Flem-House-Dev/Text-Based-Adventure-Game"
      />
      <Project 
        title="Project Three" 
        description="Project 3 is a Book Search Engine which is a MERN (MongoDB, Express.js, React, Node.js) stack application that allows users to search for books using 
        the Google Books API and find out more about their favorite books!" 
        imageUrl="/images/project3.png" 
        projectUrl="https://book-search-engine-20-aq6h.onrender.com/"
        repoUrl="https://github.com/Seanecrocker/Book-Search-Engine"
      />
      {/* Add more <Project /> components as needed */}
    </div>
  </section>
);

export default Portfolio;