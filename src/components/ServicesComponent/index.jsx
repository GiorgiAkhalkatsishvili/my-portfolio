import React, { forwardRef, useRef } from 'react';
import './ServicesComponent.css'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.jpg'
import javascriptImg from '../../assets/js.png'
import reactImg from '../../assets/react.webp';
import { motion } from 'motion/react';
import htmlIcon from '../../assets/htmlIcon.jpg'

const ServicesComponent = forwardRef((props, ref) => {
  const importRef = useRef();
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1}}
      ref={ref} className='servicesComponent'>
      <div className="services-inner">
        <div className="main-headings">
          <div className="offers-heading">
            <motion.p
            initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
            >What i offer</motion.p>
          </div>
          <motion.h1
             initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
          >My skills</motion.h1>
          <div className="paragraph">
            <motion.p
        initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
            >Below are the langauges i master in front-end development.</motion.p>
          </div>
        </div>
        <motion.div
             initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
          className="main-skills">
          <div className="skillOne">
            <img src={htmlImg} alt="" />
            <h3>HTML</h3>
            <p>With over a year of experience in front-end development, I have a strong understanding of HTML.  I create clean, semantic markup to ensure accessibility, SEO optimization, and compatibility across different browsers</p>
          </div>
          <div className="skillOne">
            <img src={cssImg} alt="" />
            <h3>CSS</h3>
            <p>I have strong expertise in CSS, using it to create responsive, modern web designs. I’m proficient in layout techniques like Flexbox and CSS Grid, and I apply advanced styling methods—including animations and transitions—to enhance user interaction and visual appeal.</p>
          </div>
          <div className="skillOne">
            <img src={javascriptImg} alt="" />
            <h3>JAVASCRIPT</h3>
            <p>I have solid experience with JavaScript, allowing me to implement dynamic functionality and interactivity in web applications. I'm proficient in DOM manipulation, event handling, and API integration to deliver smooth and responsive user experiences.</p>
          </div>
          <div className="skillOne">
            <img src={reactImg} alt="" />
            <h3>REACT</h3>
            <p>I have hands-on experience using React to build scalable, component-based web applications. I'm well-versed in hooks, state management with Redux.js, and React Router, enabling seamless navigation and consistent performance across dynamic interfaces.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default ServicesComponent
