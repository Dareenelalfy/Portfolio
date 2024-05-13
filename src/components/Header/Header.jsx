import React from 'react'
import aboutme from "../../assets/aboutme.png"
import "./header.css"


const Header = () => {
  return (
    <div className='app__header section__padding'> 
    <div className='app__header-content'>

        <div className='app__header-content-image'> 
        <img src={aboutme} alt="about me"/>
        </div>

        <div className='app__header-content-info'>
            <h1>Who am I?</h1>
            <p>I'm Dareen, a FrontEnd Developer based in Egypt, deeply passionate about the fusion of design and functionality. My journey in web development has been a quest to create visually captivating yet user-friendly experiences</p>
            <button type=" button"> Learn More </button> 
            
        </div>
       

    </div>

    
   </div>
  )
}

export default Header