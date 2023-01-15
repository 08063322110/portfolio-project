import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* _blank takes you to a new page */}
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>  
        <a href="https://github.com" target="_blank"><FaGithubAlt/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials