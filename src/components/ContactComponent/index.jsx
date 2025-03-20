import React, { forwardRef, useRef } from 'react'
import './ContactComponent.css';

const ContactComponent = forwardRef((props, refTwo) => {
  const importRef = useRef();
  return (
    <div ref={refTwo} className='contactComponent'>
      <div className="contact-inner">
        <div className="main-texts">
          <h2>Connect with me</h2>
          <h1>Get in touch</h1>
          <p>I'd love to hear from you! If you have any questions, comments or
            feedback, please use the form below.</p>
        </div>
        <div className="main-contact-inputs">
          <div className="two-inputs">
            <div className="inpOne">
              <input type="text" placeholder='Enter your name' />
            </div>
            <div className="inpTwo">
              <input type="text" placeholder='Enter your email' />
            </div>
          </div>
          <div className="inpThree">
            <input type="text" placeholder='Enter your message' />
          </div>
          <div className="input-form-btn">
            <button>Submit now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6F6F6F" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactComponent;
