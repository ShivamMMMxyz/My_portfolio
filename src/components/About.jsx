




import React from "react";
import { motion } from "framer-motion";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/javascript.png";
import git from "../assets/tech/git.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import threejs from "../assets/tech/threejs.svg";
import BallCanvas from "./BallCanvas"; 
import "./About.css";

const techIcons = [html, css, js, git, mongodb, nodejs, reactjs, threejs];
const leftIcons = techIcons.slice(0, 4);
const rightIcons = techIcons.slice(4);

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const ballVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 }
  })
};

export default function About() {
  return (
    <motion.div 
      className="about-wrapper" 
      style={{ display: "flex", gap: "20px" }}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Left floating balls */}
      <div className="balls-column">
        {leftIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="ball-wrapper"
            custom={index}
            variants={ballVariant}
            initial="hidden"
            animate="visible"
          >
            <BallCanvas icon={icon} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div 
        className="about-container" 
        style={{ flex: 1 }}
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <section className="skills">
          <h2>Technical Skills</h2>
          <div className="skill-group"><strong>Languages:</strong><span>JavaScript, C, C++, Python, SQL</span></div>
          <div className="skill-group"><strong>Web:</strong><span>HTML, CSS, React.js, Gsap, Framer Motion, Node.js, Express.js, MongoDB</span></div>
          <div className="skill-group"><strong>Mobile:</strong><span>React Native, Expo CLI</span></div>
          <div className="skill-group"><strong>Other:</strong><span>MySQL, Git, REST APIs, Email js</span></div>
          <div className="skill-group"><strong>Data Structures:</strong><span>Linked Lists, Stacks, OOPs</span></div>
          <div className="skill-group"><strong>Tools:</strong><span>VS Code, GitHub, Postman, Android Studio, MongoDb Compass</span></div>
        </section>

        <section className="achievements">
          <h2>Leadership &amp; Achievements</h2>
          <ul>
            <li>Led 4 college events including 2 in Techsrijan and 2 hackathons</li>
            <li>Secured 3rd place in Robokriti tech competition</li>
            <li>Completed multiple frontend/backend projects independently and in hackathons</li>
            <li>Completed Postman Student API expert certification course</li>
          </ul>
        </section>
      </motion.div>

      {/* Right floating balls */}
      <div className="balls-column">
        {rightIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="ball-wrapper"
            custom={index}
            variants={ballVariant}
            initial="hidden"
            animate="visible"
          >
            <BallCanvas icon={icon} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
