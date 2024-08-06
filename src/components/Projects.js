import React from 'react';

// The Projects component displays a list of projects with their details and links
function Projects() {
  // Array of project objects containing title, image, GitHub link, and live demo link
  const projects = [
    {
      title: 'Tourism website',
      img: './assets/project-1.jpeg',
      github: 'https://github.com/vasibhat/Tourism-website',
      demo: 'https://tourism-website-five.vercel.app/'
    },
    {
      title: 'Vlog',
      img: './assets/project-2.jpeg',
      github: 'https://github.com/vasibhat/Vlog',
      demo: 'https://vlog-delta.vercel.app/'
    },
    {
      title: 'Greenwave',
      img: './assets/project-3.jpeg',
      github: 'https://github.com/vasibhat/Greenwave',
      demo: 'https://greenwave-rho.vercel.app/'
    },
  ];

  return (
    <section id="projects">
      {/* Section introduction */}
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      {/* Container for project details */}
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Mapping over projects array to display each project */}
          {projects.map(({ title, img, github, demo }) => (
            <div className="details-container color-container" key={title}>
              <div className="article-container">
                <img
                  src={img}
                  alt={title}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{title}</h2>
              {/* Buttons for GitHub link and live demo */}
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = github}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = demo}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Arrow icon to navigate to contact section */}
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#contact'}
      />
    </section>
  );
}

export default Projects;
