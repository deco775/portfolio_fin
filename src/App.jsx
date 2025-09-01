import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home/Home.jsx';
import ProfileImage from './Home/ProfileImage.jsx';
import About from './About/About.jsx';
import TechSkills from './TechSkills/TechSkills.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';

function App() {

  //forScroll
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    [homeRef, aboutRef, skillsRef, projectsRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);


  //endScroll

  return (
    <>
      <Navbar active={activeSection} />
      <Home innerRef={homeRef} />
      <ProfileImage />
      <About innerRef={aboutRef} />
      <TechSkills innerRef={skillsRef} />
      <Projects innerRef={projectsRef} />
      <Contact innerRef={contactRef} />
      <Footer />
    </>
  )
}

export default App
