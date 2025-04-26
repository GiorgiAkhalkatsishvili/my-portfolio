import React, { useEffect, useRef, useState } from 'react';
import './HeaderComponent.css';
import arrowSvg from '../../assets/arrow.svg';
import backgroundImg from '../../assets/backgroundImg.png';

const HeaderComponent = ({ scrollRef, scrollAbout, scrollRefHeader, scrollToWorks }) => {
    const [sidebar, setSidebar] = useState(false);
  const sidebarMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("scrollRef is null");
    }
    setSidebar(false);
  };

  const aboutScroll = () => {
    if (scrollAbout.current) {
      scrollAbout.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("scrollRef is null");
    }
  setSidebar(false);
  };

  const ScrollToWork = () => {
    if (scrollToWorks.current) {
      scrollToWorks.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("scrollRef is null");
    }
    setSidebar(false);
  };
 
  const scrollToServicesSection = () => {
    if (scrollRefHeader.current) {
      scrollRefHeader.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('scrollRef is null');
    }
    setSidebar(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
    top: 0,   
    behavior: 'smooth' 
    });
    setSidebar(false);
  }


  const openMenu = () => {
    setSidebar(true);
  };

  const closeMenu = () => {
    setSidebar(false);
  };

  useEffect(() => {
  const handleClickOutsideSidebar = (event) => {
    if (sidebarMenuRef.current && !sidebarMenuRef.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  if (sidebar) {
    document.addEventListener('mousedown', handleClickOutsideSidebar);
  } else {
    document.removeEventListener('mousedown', handleClickOutsideSidebar);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutsideSidebar);
  };
}, [sidebar]);


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
        <div onClick={scrollToTop} className="user-name">
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
          <div className="header-btn">
            <button onClick={scrollToSection}>Connect <img src={arrowSvg} alt="arrow" /></button>
          </div>
          {sidebar && (
        <div className="overlay" onClick={closeMenu}></div>
    )}
          <div className='sidebar'>
            <div onClick={openMenu} className="sidebar-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" fill='#565656' />
              </svg>
            </div>
            <div
            ref={sidebarMenuRef}  
            className="sidebar-menu"
            style={{
            transform: sidebar ? 'translateX(0rem)' : 'translateX(50rem)',
            transition: 'transform 0.3s ease-in-out',
          }}
            >
          <div className="sidebar-list">
             <ul>
             <li onClick={scrollToTop}>Home</li>
            <li onClick={aboutScroll}>About me</li>
            <li onClick={scrollToServicesSection}>Services</li>
            <li onClick={ScrollToWork}>My work</li>
                </ul>
              </div>
              <div className="sidebar-button">
              <button onClick={scrollToSection}>Connect <img src={arrowSvg} alt="arrow" /></button>
              </div>
            <div className="sidebar-closing-button">
                <div onClick={closeMenu} className="closing-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path></svg>
              </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
