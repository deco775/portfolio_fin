
import { useEffect, useState } from "react";

const Nav = ({ active: currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const homeHeight = document.getElementById("home")?.offsetHeight || 0;

      if (currentScrollY <= homeHeight) {
        // Still inside home section
        if (currentScrollY > lastScrollY) {
          setShowNav(false); // scrolling up in home
        } else {
          setShowNav(true); // scrolling down in home
        }
      } else {
        // Past home section: always show
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const linkStyle = (name) => ({
    color: currentSection === name ? "#00fff2" : "white",
  });

  return (
    <nav className={`navbar ${showNav ? "show" : "hide"}`}>
      <div className="nav-container">
        <h1 className="logo">Pitso.</h1>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" style={linkStyle("home")} className={currentSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" style={linkStyle("about")} className={currentSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" style={linkStyle("skills")} className={currentSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" style={linkStyle("projects")} className={currentSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" style={linkStyle("contact")} className={currentSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
