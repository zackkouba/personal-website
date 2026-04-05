import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiOpenai, SiFlutter, SiFlask, SiMongodb, SiGooglecloud, SiTypescript, SiNodedotjs, SiMysql, SiPostman } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';

const projectData = [
  {
    id: 1,
    name: "Status Gym Website",
    description: "A complete website redesign and build for a local gym, featuring customized branding, page structure, and responsive design.",
    // githubLink: "https://github.com/yourusername/status-gym",
    githubLink: null,
    // liveLink: "https://statusgym.com",
    liveLink: null,
    icons: [
      <SiHtml5 title="HTML" />,
      <SiCss3 title="CSS" />,
      <SiJavascript title="JavaScript" />,
      <FaReact title="React" />
    ]
  },
  {
    id: 2,
    name: "(WIP) Hooked - Spotify Playlist Creation",
    description: "(In Early Development) Flutter application that utilizes a RESTful API created through Flask backend to work with Spotify's API. Create and add to playlists with audio snippets and personalized swiping features.",
    githubLink: null,
    liveLink: null,
    icons: [
      <SiFlutter title="Flutter" />, 
      <FaPython title="Python" />, 
      <SiFlask title="Flask" />, 
      <SiMongodb title="NoSQL" />, 
      <SiGooglecloud title="Google Cloud Platform" />
    ]
  },
  {
    id: 3,
    name: "TypeScript Package Manager API",
    description: "Package management system to upload packages via content or URL. Supports versioning through both upload types. Hosted as a RESTful API through AWS with the ability to check the rating of and lists of packages and their versions.",
    githubLink: "https://github.com/zackkouba/package-manager",
    liveLink: null,
    icons: [
      <SiHtml5 title="HTML" />, 
      <SiCss3 title="CSS" />, 
      <SiJavascript title="JavaScript" />, 
      <SiTypescript title="TypeScript" />, 
      <SiNodedotjs title="Node.js" />, 
      <SiMongodb title="NoSQL" />, 
      <FaAws title="AWS" />
    ]
  },
  {
    id: 4,
    name: "TREND - Recommendation System",
    description: "Web application designed to provide personalized suggestions for movies, restaurants, and activities based on user preferences. Using initial user surveys, user accounts, and integrating APIs like OpenAI, Google Places, and The Movie Database, TREND offers tailored recommendations that evolve as users provide feedback. This app aims to simplify decision-making by delivering customized suggestions, improving user experience with each interaction.",
    githubLink: "https://github.com/zackkouba/trend",
    liveLink: null,
    icons: [
      <SiHtml5 title="HTML" />, 
      <SiCss3 title="CSS" />, 
      <SiJavascript title="JavaScript" />, 
      <FaPython title="Python" />, 
      <SiFlask title="Flask" />, 
      <SiMysql title="MySQL" />, 
      <FaDocker title="Docker" />,
      <SiGooglecloud title="Google Cloud Platform" />, 
      <SiPostman title="REST APIs" />
    ]
  }
];

export default function Projects() {
  return (
      <div className="page-wrapper">
        <Navbar />
        <PageTransition>
          <div className="projects-container">
            <h2>My Projects</h2>
            <Swiper
              modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="project-swiper"
            >
              {projectData.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="project-card">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.icons.map((icon, index) => (
                        <span key={index} className="tech-icon">{icon}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Site</a>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </PageTransition>
      </div>
  );
}