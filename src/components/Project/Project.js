import React from 'react'
import "./project.css"



const Project = ({imgUrl, text, par, link}) => {
  return (
    <div className='app__project-container section__padding'>
       
        <div className='app__project-container-content'>
            <div className='app__project-container-content_dets'>
                <h2>{text}</h2>
                <p>{par}</p>
            </div>

            <div className='app__project-container-img'>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <img src={imgUrl} alt="project_picture"/>
              </a>
        </div>
            


        </div>

    </div>
  )
}

export default Project
