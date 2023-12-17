import React from 'react'
import "./About.css"
import { SocialIcon } from 'react-social-icons';
export default function About() {
  return (
    <div className='About_con'>
    <div className='hed'>
    <h3>NASA INFORMATIVE</h3>
    </div>

    <div className='desp'>
    <p>This NASA Image Library allows users to search, discover and download a treasure trove of more than 140,000 NASA images files from across the agency's many missions in aeronautics, astrophysics, Earth science, human spaceflight, and more with multiple resolutions to download. The website also displays the metadata associated with images. 
    Users can browse the agency's most recently uploaded files, as well as discover historic images and also image of day.
    -- <a href='https://images.nasa.gov/' target="_blank">Refrance</a> and <a href='https://api.nasa.gov/' target="_blank" >API</a> </p>
    </div>
    <div className='hed' > <h5>Abhishek Verma</h5></div>

    <span className='adec'>
    <SocialIcon url="https://www.linkedin.com/in/abhishek-ayu/" />
    </span>

    <span className='adec'>
    <SocialIcon url="https://github.com/abhishekayu" />
    </span>

    </div>
  )
}
