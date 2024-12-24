import React from 'react'
import './About.css'
//import theme_pattern from '../../assets/theme_pattern.png'
import big_profile_img from '../../assets/big_profile_img.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={big_profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Passionate about technology. I have developed skills in programming languages ​​such as PYTHON, JAVASCRIPT, SQL, HTML, as well as FRAMEWORKS such as DJANGO and REACT, applying them in software projects focused on solving practical problems.</p>
                    <br />
                    <p>I have experience working in demanding and collaborative environments, with a solution-oriented mentality and continuous improvement. I seek to provide efficiency in the development of web applications, with a focus on user experience and best practices in the sector.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr /></div>
                    <div className="about-skill"><p>Python</p><hr /></div>
                    <div className="about-skill"><p>Django</p><hr /></div>
                    <div className="about-skill"><p>JavaScript</p><hr /></div>
                    <div className="about-skill"><p>React</p><hr /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>20+</h1>
                <p>YEARS WORK EXPERIENCE</p> 
                    
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+</h1>
                <p>TECHNOLOGY CERTIFICATIONS</p>
            </div>
           
            

        </div>
    </div>
  )
}

export default About