// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <section className = 'contact-container'>
      <div className = 'contact-card'>
        <h2>Send a message</h2>
        
        <form className='contact-form' action="">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Subject' />

          <textarea name="" id="" placeholder='Message'></textarea>

          <button type='submit'>Send Message</button>

        </form>
      </div>

      <div className='contact-card'>

      <h2>Contact Info</h2>

      <a href="mailto:catherinewalker008@gmail.com">Email: catherinewalker008@gmail.com</a>
      <a href='https://github.com/catherinewalker8'>GitHub: https://github.com/catherinewalker8 </a>
      <a href="https://www.linkedin.com/in/catherinewalker8/">LinkedIn: https://www.linkedin.com/in/catherinewalker8/</a>
      <p>Location: United Kingdom</p>
      
      </div>

    </section>
  );
};

export default HomePage;
