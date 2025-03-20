import React from 'react'
import './UserComponent.css'
import profileImg from '../../assets/profile.jpg'


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
          <div className="user-img">
          <img src={profileImg} alt="" />
        </div>
        <div className="user-heading">
          <p>HI! I’m George Akhalkatsishvili 👋🏻</p>
          </div>
          <div className="main-info-heading">
            <h1>frontend web developer based in Georgia.</h1>
          </div>
          <div className="main-info-text">
            <p>I am George, I am a dedicated Junior Front-End Developer with expertise in HTML, CSS, JavaScript, and React.js. I thrive on
creating responsive, user-friendly web interfaces and have a solid foundation in modern front-end development techniques.</p>
          </div>
          <div className="main-buttons">
            <div className="btnOne">
              <button onClick={scrollToContactSection}>Connect with me <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#fff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
            </div>
            <div className="btnTwo">
              <button onClick={scrollToSection}>My skills <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserComponent
