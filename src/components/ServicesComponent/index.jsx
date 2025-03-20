import React, { forwardRef, useRef } from 'react';
import './ServicesComponent.css'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.jpg'
import javascriptImg from '../../assets/js.png'
import reactImg from '../../assets/react.webp'

const ServicesComponent = forwardRef((props, ref) => {
  const importRef = useRef();
  return (
    <div ref={ref} className='servicesComponent'>
      <div className="services-inner">
        <div className="main-headings">
          <div className="offers-heading">
            <p>What i offer</p>
          </div>
          <h1>My skills</h1>
          <div className="paragraph">
            <p>I am a frontend developer from Georgia, Telavi, with 1+ years of experience in modern front-end development.</p>
          </div>
        </div>
        <div className="main-skills">
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
        </div>
      </div>
    </div>
  );
});

export default ServicesComponent
