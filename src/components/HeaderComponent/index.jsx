import React, { useEffect, useRef, useState } from 'react';
import './HeaderComponent.css';
import moonSvg from '../../assets/Vector.svg';
import arrowSvg from '../../assets/arrow.svg';
import backgroundImg from '../../assets/backgroundImg.png';

const HeaderComponent = ({ scrollRef, scrollAbout, scrollRefHeader, scrollToWorks }) => {
  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("scrollRef is null");
    }
  };
  const aboutScroll = () => {
    if (scrollAbout.current) {
      scrollAbout.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("scrollRef is null");
    }
  };
  const ScrollToWork = () => {
    if (scrollToWorks.current) {
      scrollToWorks.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("scrollRef is null");
    }
  };
 
  const scrollToServicesSection = () => {
    if (scrollRefHeader.current) {
      scrollRefHeader.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('scrollRef is null');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
    top: 0,   
    behavior: 'smooth' 
  });
  }


  const [sidebar, setSidebar] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const activateSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='headerComponent'>
      <div className="main-background-img">
        <img src={backgroundImg} alt="background" />
      </div>
      <div className={`header-inner ${isScroll ? 'active-scroll' : ''}`}>
        <div className="user-name">
          <h1>George<span>.</span></h1>
        </div>
        <div className="nav-links-list">
          <ul>
            <li onClick={scrollToTop}>Home</li>
            <li onClick={aboutScroll}>About me</li>
            <li onClick={scrollToServicesSection}>Services</li>
            <li onClick={ScrollToWork}>My work</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="header-svg-btn">
          <div className="header-svg">
            {/* <img src={moonSvg} alt="moon" /> */}
          </div>
          <div className="header-btn">
            <button onClick={scrollToSection}>Connect <img src={arrowSvg} alt="arrow" /></button>
          </div>
          <div className={`sidebar ${sidebar ? 'open' : ''}`}>
            <div onClick={activateSidebar} className="sidebar-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" fill='#565656' />
              </svg>
            </div>
            {sidebar && (
              <div className='sidebar-list open'>
                <ul>
                  <li onClick={scrollToTop}>Home</li>
                  <li onClick={aboutScroll}>About me</li>
                  <li onClick={scrollToServicesSection}>Services</li>
                  <li onClick={ScrollToWork}>My work</li>
                  <li>Testimonials</li>
                  <div className="sidebar-moon">
                    {/* <p>Dark mode:</p>
                    <img src={moonSvg} alt="moon" /> */}
                  </div>
                  <button onClick={scrollToSection}>Connect <img src={arrowSvg} alt="arrow" /></button>
                </ul>
                <div className="sidebar-closing-svg">
                  <div onClick={closeSidebar} className="closing-sidebar-section">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path fill='#fff' d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {sidebar && <div className={`dark-overlay ${sidebar ? 'open' : ''}`} onClick={closeSidebar}></div>}
    </div>
  );
};

export default HeaderComponent;
