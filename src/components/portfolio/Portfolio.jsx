import React from 'react'
import './portfolio.css'
import dribbble1 from '../../assets/dribbble1.png'
import dribbble2 from '../../assets/dribbble2.png'
import dribbble3 from '../../assets/dribbble3.png'
import dribbble4 from '../../assets/dribbble4.png'
import dribbble5 from '../../assets/dribbble5.png'
import dribbble6 from '../../assets/dribbble6.png'

const data = [
  {
    id: 1,
    image: dribbble1,
    title: 'finance app',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20274820-Finance-app-interaction'
  },
  {
    id: 2,
    image: dribbble2,
    title: 'Agency Illustration',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20283215-Agency-Illustrations'
  },
  {
    id: 3,
    image: dribbble3,
    title: 'UI interface',
    github: 'https://github.com',
    demo:'https://dribbble.com/goods/284259-Futuristic-HUD-Interface-UI-XT2'
  },
  {
    id: 4,
    image: dribbble4,
    title: 'brand strategy',
    github: 'https://github.com',
    demo:'https://dribbble.com/goods/944625-HAUS-Brand-Strategy?token=gAAAAABjtLdQ8R3gIWEUmaX8n4LYn52T5xp4_fee9qmeMx1VXp2Unys-_MI48sR7k2bT6PYIirzTjL6naob4x-44D0vQVGqUncq6YOwSO_6xMcYwg6lSUz7rH-OnDLyMTe60hR0OuC6RA1e9KSG3zs-DuENFxJPg88b4BBIeKBLzcR_lc9gitbg%3D'
  },
  {
    id:5,
    image: dribbble5,
    title: 'mobile-app sample',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20274820-Finance-app-interaction'
  },
  {
    id: 6,
    image: dribbble6,
    title: 'UI/UX Website-designs',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20276321--UI-UX-Website-Designs-2022'
  },
]


const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
                <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
       
      </div>
    </section>
  )
}

export default Portfolio