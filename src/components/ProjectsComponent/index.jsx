import React from 'react'
import './ProjectsComponent.css'
import doctorWebsite from '../../assets/doctor-web-img.png'
import eCommerceWebsite from '../../assets/e-commerceImg.png'
import cursorSvg from '../../assets/cursor.png'
import apiShop from '../../assets/apiShop.png'
import additionalPhoto from '../../assets/photo.png'

const ProjectsComponent = () => {
  return (
    <div className='projectsComponent'>
      <div className="projects-inner">
        <div className="main-headings">
          <h2>My portfolio</h2>
          <h1>My latest work</h1>
        </div>
        <div className="paragraph">
          <p>Welcome to my web development portfolio! Explore a collection of projects showcasing
my expertise in front-end development.</p>
        </div>
        <div className="main-projects-container">
          <div className="projectOne">
            <img src={doctorWebsite} alt="" />
            <div className="project-text-icon">
              <h2>Doctors appointment website</h2>
              <div className="cursor-img">
                <img src={cursorSvg} alt="" />
              </div>
            </div>
          </div>
          <div className="projectOne">
            <img src={eCommerceWebsite} alt="" />
            <div className="project-text-icon">
              <h2>Fashion e-commerce website</h2>
              <div className="cursor-img">
                <img src={cursorSvg} alt="" />
              </div>
            </div>
          </div>
          <div className="projectOne">
            <img src={apiShop} alt="" />
            <div className="project-text-icon">
              <h2>Fashion e-commerce website</h2>
              <div className="cursor-img">
                <img src={cursorSvg} alt="" />
              </div>
            </div>
          </div>
          <div className="projectOne">
            <img src={additionalPhoto} alt="" />
            <div className="project-text-icon">
              <h2>More projects coming soon</h2>
              <div className="cursor-img">
                <img src={cursorSvg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="projects-btn">
          <button>My Github <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#6F6F6F' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsComponent
