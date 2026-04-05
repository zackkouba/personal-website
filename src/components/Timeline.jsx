import React from 'react';
import './Timeline.css';

export default function Timeline() {
  // Store your experience data here to keep the return block clean
  const experiences = [
    {
      id: 1,
      company: 'US Bank',
      position: 'Software Engineer',
      timeframe: 'Jun 2025 - Present',
      logo: <img src={'/usbanklogo.png'} alt='US Bank Logo' />,
      details: '[WIP]'
    },
    {
      id: 2,
      company: 'US Bank',
      position: 'Software Engineer Intern',
      timeframe: 'May 2024 - Aug 2024',
      logo: <img src={'/usbanklogo.png'} alt='US Bank Logo' />,
      details: '[WIP]'
    },
    {
      id: 3,
      company: 'Burns & McDonnell',
      position: 'Controls Engineer Intern',
      timeframe: 'May 2023 - Aug 2023',
      logo: <img src={'/burnsmcdlogo.png'} alt='Burns & McDonnell Logo' />,
      details: '[WIP]'
    },
    {
      id: 4,
      company: 'Christ Community Church',
      position: 'Technology Intern',
      timeframe: 'Apr 2021 - Sep 2021',
      logo: <img src={'/ccclogo.png'} alt='CCC Logo' />,
      details: '[WIP]'
    }
  ];

  return (
    <div className="timeline-container">
      {/* The vertical line down the middle */}
      <div className="timeline-line"></div>

      {experiences.map((item, index) => {
        // Determine if the item is even or odd to alternate sides
        const isEven = index % 2 === 0;

        return (
          <div key={item.id} className="timeline-item">
            
            {/* LEFT SIDE */}
            <div className={`timeline-side left-side ${isEven ? 'has-box' : 'has-text'}`}>
              {isEven ? (
                <div className="timeline-box">
                  <h3>{item.company}</h3>
                  <h4>{item.position}</h4>
                  {/* <div className="tooltip">{item.details}</div> */}
                </div>
              ) : (
                <span className="timeline-date">{item.timeframe}</span>
              )}
            </div>

            {/* CENTER ICON (Hollow Circle) */}
            <div className="timeline-icon">
              {item.logo}
            </div>

            {/* RIGHT SIDE */}
            <div className={`timeline-side right-side ${!isEven ? 'has-box' : 'has-text'}`}>
              {!isEven ? (
                <div className="timeline-box">
                  <h3>{item.company}</h3>
                  <h4>{item.position}</h4>
                  {/* <div className="tooltip">{item.details}</div> */}
                </div>
              ) : (
                <span className="timeline-date">{item.timeframe}</span>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}