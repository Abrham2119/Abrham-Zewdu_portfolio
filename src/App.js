import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import FloatingDiv from "./component/FloatingDiv/FloatingDiv";
import Service from './component/Service/Service';  // Adjust the path accordingly
import Experience from './component/Experience/Experience'
import Works from './component/Works/Works';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';


function App() {
  return(
    <div className="App" style={{background:'var(black)'}}>
      <Navbar />
      <Intro /> 
      <Service/>
      <Experience/>  
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
