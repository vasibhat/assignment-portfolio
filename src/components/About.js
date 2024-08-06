import React from 'react';

// The About component displays the "About Me" section of the portfolio
function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            {/* Container for experience details */}
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>
            {/* Container for education details */}
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.E. Bachelors Degree</p>
            </div>
          </div>
          {/* Container for the about text */}
          <div className="text-container">
            <p>
              Hello! I'm Vasisht, a freelance frontend developer with over 2
              years of experience in creating visually stunning, user-friendly, and responsive websites.
              I specialize in HTML, CSS, JavaScript, and React, and am passionate about transforming ideas into dynamic digital experiences. 
              My goal is to deliver high-quality web solutions that not only meet but exceed client expectations by focusing on performance,
              cross-browser compatibility, and seamless user experience across all devices.
            </p>
          </div>
        </div>
      </div>
      {/* Arrow icon to navigate to the experience section */}
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#experience'}
      />
    </section>
  );
}

export default About;
