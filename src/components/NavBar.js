import React from 'react';

// The NavBar component displays the navigation bar for both desktop and mobile views
function NavBar() {
  // Function to toggle the mobile menu
  const toggleMenu = () => {
    document.querySelector('.menu-links').classList.toggle('open');
  };

  return (
    <>
      {/* Desktop navigation bar */}
      <nav id="desktop-nav">
        <div className="logo">Vasisht</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* Mobile navigation bar with hamburger menu */}
      <nav id="hamburger-nav">
        <div className="logo">Vasisht</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
