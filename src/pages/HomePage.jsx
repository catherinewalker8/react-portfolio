import React from 'react';

const HomePage = () => {
  return (
    <div className="gallery">
      <div className="gallery-item">
        <div className="image-container">
          <img src="img_5terre.jpg" alt="Cinque Terre" />
        </div>
        <div className="desc">
          <h3>Oasis System</h3>
          <p>Backend management tools.</p>
        </div>
      </div>

      <div className="gallery-item">
        <div className="image-container">
          <img src="img_forest.jpg" alt="Forest" />
        </div>
        <div className="desc">
          <h3>Forest Monitor</h3>
          <p>Data visualization for nature.</p>
        </div>
      </div>

      <div className="gallery-item">
        <div className="image-container">
          <img src="img_lights.jpg" alt="Northern Lights" />
        </div>
        <div className="desc">
          <h3>Sky Tracker</h3>
          <p>Real-time atmosphere mapping.</p>
        </div>
      </div>

      <div className="gallery-item">
        <div className="image-container">
          <img src="img_mountains.jpg" alt="Mountains" />
        </div>
        <div className="desc">
          <h3>Summit API</h3>
          <p>High-altitude logic systems.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;