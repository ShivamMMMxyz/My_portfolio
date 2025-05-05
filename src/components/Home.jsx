import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Desktop from './Desktop';
import profileImage from '../assets/profile.jpg';
import './Home.css';
import { motion } from "motion/react"
export default function Home() {
  return (
    <div className="hero-overlay-container">
      <div className="overlay-content">
        <div className="left-section">
          <motion.div className="hero-text"
   initial={{ opacity: 0, scale: 0.2, y: 40 }}
   animate={{ opacity: 1, scale: 1, y: 0 }}
transition={{
  delay:1.5,
  type:"spring",
  stiffness:80,
  damping:10,
  duration:1.5
}}

          >
            <h1>Hi, I’m Shivam</h1>
            <h2>An aspiring developer and passionate coder,  curious and driven to build something awesome!</h2>
          </motion.div>
          <div className="hero-desktop">
            <Desktop />
          </div>
        </div>

        <div className="right-section">
          <div className="profile-circle">
            <img src={profileImage} alt="Profile" />
          </div>

          {/* Social Links */}
          <div className="social-icons">
            <a href="https://github.com/ShivamMMMxyz" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shivam-kushwaha-b04b61324/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.codechef.com/users/ample_glow_20" target="_blank" rel="noopener noreferrer">
              <FaCode />
            </a>
            <a href="https://leetcode.com/Shivammmmut_prygrj" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
