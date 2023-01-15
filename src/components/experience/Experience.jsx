import React from 'react'
import { BiSelection } from 'react-icons/bi'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>HTML</h4> </div>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div><h4>CSS</h4></div>
            <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>JavaScript</h4></div>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>Bootstrap</h4></div>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>Tailwind</h4></div>
            <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>React JS</h4></div>
            <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>

      {/* END OF FRONTEND */}

        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' /> 
            <div><h4>Node JS</h4></div>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>Mongo DB</h4></div>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>NoSQL</h4></div>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>Python</h4></div>
            <small className='text-light'>Basic</small>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>Express JS</h4></div>
            <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience