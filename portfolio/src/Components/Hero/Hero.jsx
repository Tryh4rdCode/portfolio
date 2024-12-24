import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
    <img src={profile_img} alt=""/>
    <h1>I'm Jonatthan Medalla, Backend Developer based in Chile</h1>
    <p>I am a Backend Developer from Santiago de Chile, recently graduated from the Inacap Professional Institute</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero