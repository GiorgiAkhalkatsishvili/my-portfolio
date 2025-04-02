import React, { forwardRef, useRef } from 'react';
import './ServicesComponent.css'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.jpg'
import javascriptImg from '../../assets/js.png'
import reactImg from '../../assets/react.webp';
import { motion } from 'motion/react';

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
            <p> I have strong expertise in CSS, utilizing it to build responsive, modern web designs. I am proficient with techniques like Flexbox and CSS Grid for layout management, and I incorporate advanced styling techniques such as CSS animations and transitions to enhance user interaction. </p>
          </div>
          <div className="skillOne">
            <img src={javascriptImg} alt="" />
            <h3>JAVASCRIPT</h3>
            <p> I have hands-on experience with JavaScript, enabling me to add interactivity and dynamic behavior to web applications. I am comfortable with DOM manipulation, event handling, and integrating APIs to create seamless user experiences.</p>
          </div>
          <div className="skillOne">
            <img src={reactImg} alt="" />
            <h3>REACT</h3>
            <p>I have practical knowledge of React for building component-based, scalable web applications. I am proficient with hooks, state management, and working with React Router for efficient navigation, ensuring smooth and efficient performance across web applications.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default ServicesComponent
