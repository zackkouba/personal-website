import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

// We define this outside the component so it remembers the last page across renders
let prevIndex = null; 

// Map your routes to an index so we know their order
const routes = {
  '/': 0,
  '/resume': 1,
  '/experience': 2,
  '/projects': 3,
  '/contact': 4
};

export default function PageTransition({ children }) {
  const location = useLocation();
  const [animClass, setAnimClass] = useState('fade-in');

  useEffect(() => {
    // Get the index of the current page (default to 0 if not found)
    const currentIndex = routes[location.pathname] ?? 0; 
    
    if (prevIndex === null || currentIndex === 0 || prevIndex === 0) {
      // 1. Initial load, OR moving to Home, OR moving from Home -> Fade only
      setAnimClass('fade-in');
    } else if (currentIndex > prevIndex) {
      // 2. Moving right on the navbar (e.g., Resume -> Experience)
      setAnimClass('slide-from-right'); 
    } else if (currentIndex < prevIndex) {
      // 3. Moving left on the navbar (e.g., Projects -> Experience)
      setAnimClass('slide-from-left');
    }

    // Update the tracker for the next click
    prevIndex = currentIndex;
  }, [location.pathname]);

  return (
    /* The 'key' forces React to replay the animation even if the class name stays the same */
    <div key={location.pathname} className={animClass}>
      {children}
    </div>
  );
}