// filepath: /c:/Users/forge/Documents/GitHub/portfolio/portfolio/src/Components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import CV from '../../assets/CV.pdf';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Jonatthan Medalla,</span> Backend Developer based in Chile</h1>
      <p>I am a Backend Developer from Santiago de Chile, recently graduated from the Inacap Professional Institute</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <a href={CV} className="hero-resume" download>My resume</a>
      </div>
    </div>
  );
}

export default Hero;