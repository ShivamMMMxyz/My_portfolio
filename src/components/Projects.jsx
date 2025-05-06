
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Snake Game (Web)",
    description: "Inspired by the old Nokia Snake game — retro visuals, nostalgic sounds, smooth controls, real-time score, and high score tracking..",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://snake-game-eight-sandy.vercel.app/"
  },
  {
    title: "3D Shoe Website",
    description: "Interactive shoe product showcase with 3D model animations and smooth page ",
    tech: ["React", "React Three Fiber", "GSAP", "Drei", "CSS"],
    link: "https://r3f-3dshoe-page.vercel.app/"
  },
  {
    title: "Weather App ",
    description: "Just enter your city name it will show u the current weather of the city using the open weather API.",
    tech: ["React Native", "Expo", "OpenWeather API"],
    link: "https://github.com/yourusername/weather-app"
  },
  {
    title: "CO₂ Tracker App",
    description: "Track your carbon footprint: map-based route tracking .",
    tech: ["React Native", "Expo", "Openstreet Maps API"],
    link: "https://youtu.be/V64pdkxJ3XY?si=uyjj8f8eEuK4DYyH"
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((proj, idx) => (
        <div key={idx} className="project-card">
          <h2 className="project-title">{proj.title}</h2>
          <p className="project-desc">{proj.description}</p>
          <ul className="tech-list">
            {proj.tech.map((t) => (
              <li key={t} className="tech-item">{t}</li>
            ))}
          </ul>
          <a
            href={proj.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
