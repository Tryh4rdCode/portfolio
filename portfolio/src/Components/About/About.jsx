import React from 'react'
import './About.css'
//import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src="{theme_pattern}" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Apasionado por la tecnología. He desarrollado habilidades en lenguajes de programación como PYTHON, JAVASCRIPT, SQL, HTML, además de FRAMEWORKS como DJANGO y REACT, aplicándolos en proyectos de software enfocados en resolver problemas prácticos.</p>
                    <p>Tengo experiencia trabajando en entornos exigentes y colaborativos, con una mentalidad orientada a soluciones y a la mejora continua. Busco aportar eficiencia en el desarrollo de aplicaciones web, con un enfoque en la experiencia del usuario y las mejores prácticas del sector.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Django</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About