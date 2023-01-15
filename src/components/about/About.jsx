import React from 'react'
import './about.css'
import ME2 from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-images5'>
            <img src={ME2} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__card'/>
              <h5>Experience</h5>
              <small>1+ Year(s) Working </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__card'/>
              <h5>Clients</h5>
              <small>20+ Worldwide </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__card'/>
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          
        <p>
          Resourceful Fullstack Web Developer (MERN), with 2 years
          of experience working to outline organisational needs and 
          translate them into extensive lines of code that support objectives.

        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div> 
      </div>
    </section>
  )
}

export default About