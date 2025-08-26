import { useEffect, useState } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      document.addEventListener('scroll', handleScroll);
      return () => document.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home">Devaki Nanda Gopal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;