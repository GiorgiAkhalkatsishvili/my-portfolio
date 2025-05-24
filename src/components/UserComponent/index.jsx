import React from 'react'
import './UserComponent.css'
import { motion } from 'motion/react';
import profileImg from '../../assets/meeee.jpg'

const UserComponent = ({scrollRef, connectRef}) => {
  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('scrollRef is null');
    }
  };

  const scrollToContactSection = () => {
    if (connectRef.current) {
      connectRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('scrollRef is null');
    }
  };

  return (
    <div className='userComponent'>
      <div className="user-inner">
        <div className="user-profile-texts">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            className="user-img">
          <img src={profileImg} alt="" />
        </motion.div>
        <div className="user-heading">
            <motion.p
            initial={{y: -20, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 0.3}}
            >HI! I’m George Akhalkatsishvili 👋🏻</motion.p>
          </div>
          <div className="main-info-heading">
            <motion.h1
            initial={{y: -30, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}
            >frontend web developer based in Georgia.</motion.h1>
          </div>
          <div className="main-info-text">
            <motion.p
            initial={{opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
            >I am George, I am a dedicated Junior Front-End Developer with expertise in HTML, CSS, JavaScript, and React.js. I thrive on
creating responsive, user-friendly web interfaces and have a solid foundation in modern front-end development techniques.</motion.p>
          </div>
          <div className="main-buttons">
            <div className="btnOne">
              <motion.button
            initial={{y: 30, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 0.6}}
                
                onClick={scrollToContactSection}>Connect with me <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#fff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></motion.button>
            </div>
            <div className="btnTwo">
              <motion.button
            initial={{y: 30, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
                transition={{ duration: 0.6, delay: 0.2 }}
                
                onClick={scrollToSection}>My skills <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserComponent
