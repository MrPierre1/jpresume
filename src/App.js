import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import resume from './data/resumeData.json'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';

import Portfolio from './Components/Portfolio';

 function App () {
     const [resumeData, setresumeData] = useState(resume)

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);


  useEffect(() => {
    // getResumeData()
    console.log('resume data', resumeData)
    return () => {
    }
  }, [resumeData])

 
    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Footer data={resumeData.main}/>
      </div>
    );
}

export default App;
