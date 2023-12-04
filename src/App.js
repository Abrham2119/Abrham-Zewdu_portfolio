import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import FloatingDiv from "./component/FloatingDiv/FloatingDiv";
import Service from './component/Service/Service';  // Adjust the path accordingly
import Experience from './component/Experience/Experience'

function App() {
  return(
    <div className="App">
      <Navbar />
      <Intro /> 
      <Service/>
      <Experience/>      
    </div>
  );
}

export default App;
