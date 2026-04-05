import { Link } from 'react-router-dom';
import ParallaxWallpaper from '../components/Wallpaper';
import PageTransition from '../components/PageTransition';
import './Home.css';

export default function Home() {
  return (
    <PageTransition>
      <ParallaxWallpaper>
        <div className="home-container page-animate">
          <div className="home-content">
            
            <div className="flat-menu">
              <h1 className="home-title">Zack Kouba</h1>
              <Link to="/resume" className="home-link">Resume</Link>
              <Link to="/experience" className="home-link">Experience</Link>
              <Link to="/projects" className="home-link">Projects</Link>
              <Link to="/contact" className="home-link">Contact</Link>
            </div>
          </div>
        </div>
      </ParallaxWallpaper>
    </PageTransition>
  );
}