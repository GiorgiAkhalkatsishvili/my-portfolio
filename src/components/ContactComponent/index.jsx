import React, { forwardRef, useRef } from 'react'
import './ContactComponent.css';
import { motion } from 'motion/react';

const ContactComponent = forwardRef((props, refTwo) => {
  const importRef = useRef();
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1}}
      ref={refTwo} className='contactComponent'>
      <div className="contact-inner">
        <div className="main-texts">
          <motion.h2
          initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
          >Connect with me</motion.h2>
          <motion.h1
          initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
          >Get in touch</motion.h1>
          <motion.p
          initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
          >I'd love to hear from you! If you have any questions, comments or
            feedback, please use the form below.</motion.p>
        </div>
        <div className="main-contact-inputs">
          <motion.form
        initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{delay: 0.9, duration: 0.5}}
            action="https://api.web3forms.com/submit" method="POST">
            <div className="two-inputs">
              <div className="inpOne">
                <input type="hidden" name="access_key" value="f6050f4a-60d0-4bb7-bb52-61f7bca1c076"></input>
                <motion.input
        initial={{y: 50, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 1.2, duration: 0.6}}
                  name='name' type="text" placeholder='Enter your name' />
            </div>
            <div className="inpTwo">
                <motion.input
              initial={{y: 50, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 1.2, duration: 0.6}}
                  name='email' type="email" placeholder='Enter your email' />
            </div>
          </div>
          <div className="inpThree">
              <motion.input
            initial={{y: 100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
                name='message' type="text" placeholder='Enter your message' />
          </div>
          <div className="input-form-btn">
              <motion.button
        initial={{scale: 1.05}}
      transition={{duration: 0.3}}
              >Submit now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6F6F6F" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></motion.button>
          </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
});

export default ContactComponent;
