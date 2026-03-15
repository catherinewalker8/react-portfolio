import React from 'react';

const HomePage = () => {
  return (
    <div className="gallery">
      <a href='https://blog-full-stack-co1v.onrender.com/' className="gallery-item">
        <div className="image-container">
          <img src="/assets/all-about-pets.JPG" alt="All About Pets Blog" />
        </div>
        <div className="desc">
          <h3>Pet Blog</h3>
          <p>For interaction between pet owners.</p>
        </div>
      </a>

      <a href='https://to-do-list-d4u0.onrender.com/' className="gallery-item">
        <div className="image-container">
          <img src='/assets/to-do-list.JPG' alt="To-do List" />
        </div>
        <div className="desc">
          <h3>To-do List</h3>
          <p>Plan and organise your life.</p>
        </div>
      </a>

      <a href='https://catherinewalker8.github.io/code-ninjas-unleashed-cw/' className="gallery-item">
        <div className="image-container">
          <img src="/assets/pokemon-weather.JPG" alt="Pokemon and Weather" />
        </div>
        <div className="desc">
          <h3>Weather x Pokemon</h3>
          <p>Discover which Pokemon is causing <br /> the weather where you are.</p>
        </div>
      </a>

      <a href='https://catherinewalker8.github.io/woodland-priorities-tool--bootstrap/index.html' className="gallery-item">
        <div className="image-container">
          <img src="/assets/woodland-management.JPG" alt="Woodland Management Tool" />
        </div>
        <div className="desc">
          <h3>Woodland Priorities Tool</h3>
          <p>Explore how to manage woodland <br /> based on priority aims.</p>
        </div>
      </a>

            <a href='https://github.com/catherinewalker8/readme-generator' className="gallery-item">
        <div className="image-container">
          <img src="/assets/read-me.JPG" alt="ReadME Generator" />
        </div>
        <div className="desc">
          <h3>ReadMe Generator</h3>
          <p>Automatically create a README.md file <br /> for github creations.</p>
        </div>
      </a>

            <a href='https://catherinewalker8.github.io/personal-portfolio/' className="gallery-item">
        <div className="image-container">
          <img src="/assets/portfolio.JPG" alt="My First Portfolio" />
        </div>
        <div className="desc">
          <h3>Personal Portfolio</h3>
          <p>My first software project - <br />a personal portfolio.</p>
        </div>
      </a>
    </div>
  );
};

export default HomePage;