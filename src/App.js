import { useRef } from 'react';
import './App.css';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ProjectsComponent from './components/ProjectsComponent';
import ServicesComponent from './components/ServicesComponent';
import UserComponent from './components/UserComponent';

function App() {
  const sectionRef = useRef(null);
  const sectionRefTwo = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const myWorkRef = useRef(null);

  return (
    <div className="App">
      <HeaderComponent scrollRef={sectionRef} scrollAbout={aboutRef} scrollServices={servicesRef} scrollRefHeader={sectionRefTwo} scrollToWorks = {myWorkRef}/>
      <UserComponent scrollRef={sectionRefTwo} connectRef={sectionRef}/>
      <AboutComponent ref={aboutRef}/>
      <ServicesComponent ref={sectionRefTwo}/>
      <ProjectsComponent ref={myWorkRef}/>
      <ContactComponent ref={sectionRef}/>
      <FooterComponent/>
    </div>
  );
}

export default App;
