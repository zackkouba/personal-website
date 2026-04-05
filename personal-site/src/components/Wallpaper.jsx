import React, { useState, useEffect } from 'react';
import './Wallpaper.css'; 

// 1. Pass 'children' into the component
const ParallaxWallpaper = ({ children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 10;
      setOffset({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="wallpaper-container">
      <div
        className="wallpaper-image"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      ></div>
      
      {/* 2. Render the children (your Home content) on top of the background */}
      <div className="wallpaper-content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default ParallaxWallpaper;