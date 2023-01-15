import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section className='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>FRONT-END DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Optimizing the user experience.</p>
            </li> */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using HTML, Bootstrap, JavaScript, CSS & React JS e.t.c to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managing software workflow.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF FRONTEND */}
        
        <article className='service'>
          <div className='service__head'>
            <h3>BACK-END DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficiency with Backend language(s): Node-JS 
</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience with the design and implementation of APIs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Understanding of code versioning tool(s): Git.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Involved and participate in the overall application lifecycle.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus on coding and debugging.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaborate with Front-end developers .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Troubleshoot and debug applications.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF BACKEND */}

        <article className='service'>
          <div className='service__head'>
            <h3>AUTOCAD DESIGNER (2D & 3D)</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience in  2D and 3D AutoCAD.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating construction drawings.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>AutoCAD drawing and detailing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Review designs and help resolve the details not completely defined.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Draft and prepare layout drawings.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Calculate dimensions and allowances with accurate precision.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF AUTOCAD*/}
        
      </div>
    </section>
  )
}

export default Services