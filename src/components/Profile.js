import React from 'react';

// The Profile component displays the user's profile information and links to their CV and contact info
function Profile() {
  return (
    <section id="profile">
      {/* Container for profile picture */}
      <div className="section__pic-container">
        <img src="./assets/profile-pic.png" alt="Vasisht profile picture" />
      </div>
      {/* Container for text information */}
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Vasisht</h1>
        <p className="section__text__p2">Frontend Developer</p>
        {/* Container for buttons */}
        <div className="btn-container">
          {/* Button to download the CV */}
          <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/resume-example.pdf')}
          >
            Download CV
          </button>
          {/* Button to navigate to contact info */}
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href = './#contact'}
          >
            Contact Info
          </button>
        </div>
        {/* Container for social media icons */}
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href = 'https://twitter.com/vasisht_bhat'}
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href = 'https://github.com/vasibhat'}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
