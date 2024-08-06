import React from 'react';

// The Experience component displays the "Experience" section of the portfolio
function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Container for frontend development experience */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {[
                { skill: 'HTML', level: 'Experienced' },
                { skill: 'CSS', level: 'Experienced' },
                { skill: 'SASS', level: 'Intermediate' },
                { skill: 'JavaScript', level: 'Intermediate' },
                { skill: 'TypeScript', level: 'Intermediate' },
                { skill: 'React JS', level: 'Intermediate' },
                { skill: 'Next JS', level: 'Intermediate' },
                { skill: 'Material UI', level: 'Intermediate' },
              ].map(({ skill, level }) => (
                <article key={skill}>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{skill}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {/* Container for backend development experience */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {[
                { skill: 'MongoDB', level: 'Basic' },
                { skill: 'Node JS', level: 'Intermediate' },
                { skill: 'Express JS', level: 'Intermediate' },
                { skill: 'Git', level: 'Intermediate' },
              ].map(({ skill, level }) => (
                <article key={skill}>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{skill}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Arrow icon to navigate to the projects section */}
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#projects'}
      />
    </section>
  );
}

export default Experience;
