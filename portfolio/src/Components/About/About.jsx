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
                    <p>Apasionado por la tecnología. He desarrollado habilidades en lenguajes de programación como PYTHON, JAVASCRIPT, SQL, HTML, además de FRAMEWORKS como DJANGO y REACT, aplicándolos en proyectos de software enfocados en resolver problemas prácticos.</p>
                    <p>Tengo experiencia trabajando en entornos exigentes y colaborativos, con una mentalidad orientada a soluciones y a la mejora continua. Busco aportar eficiencia en el desarrollo de aplicaciones web, con un enfoque en la experiencia del usuario y las mejores prácticas del sector.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p></div>
                    <div className="about-skill"><p>Python</p></div>
                    <div className="about-skill"><p>Django</p></div>
                    <div className="about-skill"><p>JavaScript</p></div>
                    <div className="about-skill"><p>React</p></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />

        </div>
    </div>
  )
}

export default About