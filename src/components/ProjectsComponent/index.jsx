import React, { forwardRef, useRef } from 'react';
import './ProjectsComponent.css';
import doctorWebsite from '../../assets/doctor-web-img.png';
import eCommerceWebsite from '../../assets/e-commerceImg.png';
import cursorSvg from '../../assets/cursor.png';
import apiShop from '../../assets/apiShop.png';
import additionalPhoto from '../../assets/photo.png';
import { motion } from 'motion/react';
import eCommerceScreenShot from '../../assets/e-commerce-screen-shot.png';

const ProjectsComponent = forwardRef((props, myWorkRef) => {
  const myRef = useRef();
  return (
    <motion.div
      ref={myWorkRef}  // This is where the ref is forwarded
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="projectsComponent"
    >
      <div className="projects-inner">
        <div className="main-headings">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            My projects
          </motion.h2>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            My latest work
          </motion.h1>
        </div>
        <div className="paragraph">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="main-projects-container"
        >
          <div className="projectOne">
            <img src={doctorWebsite} alt="" />
            <a target="_blank" href="https://doctors-appointment-six.vercel.app/">
              <div className="project-text-icon">
                <h2>Doctors appointment website</h2>
                <div className="cursor-img">
                  <img src={cursorSvg} alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className="projectOne">
            <a target="_blank" href="https://ecommerce-george.vercel.app/">
              <img src={eCommerceWebsite} alt="" />
              <div className="project-text-icon">
                <h2>Fashion e-commerce website</h2>
                <div className="cursor-img">
                  <img src={cursorSvg} alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className="projectOne">
            <a target="_blank" href="https://new-e-commerce-sigma.vercel.app/">
              <img src={eCommerceScreenShot} alt="" />
              <div className="project-text-icon">
                <h2>Fashion, clean shop website</h2>
                <div className="cursor-img">
                  <img src={cursorSvg} alt="" />
                </div>
              </div>
            </a>
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="projects-btn"
        >
          <a target="_blank" href="https://github.com/GiorgiAkhalkatsishvili">
            <button>Github <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6F6F6F" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default ProjectsComponent;
