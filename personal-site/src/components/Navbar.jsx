import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-icon"><img src='/logo.png' alt='Logo' /></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}