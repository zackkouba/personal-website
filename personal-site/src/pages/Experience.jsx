import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import PageTransition from '../components/PageTransition';
import './Experience.css';

export default function Experience() {
  return (
      <div className="page-wrapper">
        <Navbar />
        <PageTransition>
          <div className="experience-container">
            <Timeline />
          </div>
        </PageTransition>
      </div>
  );
}