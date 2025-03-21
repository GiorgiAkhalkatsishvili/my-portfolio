import React, { forwardRef } from 'react'
import './AboutComponent.css'
import profileImg from '../../assets/me.jpg';
import vsCodeImg from '../../assets/vsCode.png';
import figamImg from '../../assets/figma.png';
import gitImg from '../../assets/git.png';
import githubImg from '../../assets/github.png';
import { motion } from 'motion/react';

const AboutComponent = forwardRef((props, scrollAbout) => {
  return (
    <div ref={scrollAbout} className='aboutComponent'>
      <div className="about-inner">
        <div className="main-texts">
          <motion.h2
          initial={{opacity: 0, y: -20}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.5, delay: 0.3}}
          >Introduction</motion.h2>
          <motion.h1
          initial={{opacity: 0, y: -20}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.5, delay: 0.5}}
          >About me</motion.h1>
        </div>
        <motion.div
        initial={{opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.8}}
          className="main-image-texts">
          <div
          initial={{opacity: 0, scale: 0.9}}
      whileInView={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.6}}
            className="main-about-image">
          <img src={profileImg} alt="" />
        </div>
          <div className="main-paragraph-skills">
            <div
            initial={{opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.6, delay: 0.8}}
            className="main-about-paragraph">
        <p>My passion for coding, combined with my ability to adapt and learn quickly, ensures I can effectively contribute to a development team. Fluent in Georgian, second language - English.
</p>
            </div>
            <motion.div
            initial={{opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.3, delay: 0.5}}
              className="my-skills">
              <div className="skillOne">
                <div className="skill-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill='#49516B' d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                  <div className="skills-heading">
                    <h3>Languages</h3>
                  </div>
                  <div className="main-programing-skills">
                    <p>HTML, CSS, JavaScript React Js</p>
                  </div>
                </div>
              </div>
              <div className="skillOne">
                <div className="skill-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill='#49516B' d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
                  <div className="skills-heading">
                    <h3>Education</h3>
                  </div>
                  <div className="main-programing-skills">
                    <p>Telavi state university, Georgia</p>
                  </div>
                </div>
              </div>
              <div className="skillOne">
                <div className="skill-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#49516B' d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/></svg>
                  <div className="skills-heading">
                    <h3>Projects</h3>
                  </div>
                  <div className="main-programing-skills">
                    <p>Built numerous projects that, showcase my skills</p>
                  </div>
                </div>
              </div>
            </motion.div >
            <div className="tools-container">
              <div className="heading">
                <motion.h3
                initial={{y: 20, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{delay: 1.3, duration: 0.5}}
                >Tools i use</motion.h3>
              </div>
              <motion.div
                className="tools-list">
                <div className="vsCode">
                  <img src={vsCodeImg} alt="" />
                </div>
                <div className="figma">
                  <img src={figamImg} alt="" />
                </div>
                <div className="git">
                  <img src={gitImg} alt="" />
                </div>
                <div className="github">
                  <img src={githubImg} alt="" />
                </div>
              </motion.div>
            </div>
        </div>
        </motion.div>
      </div>
    </div>
  )
})

export default AboutComponent
