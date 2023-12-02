import Navbar from "./component/Navbar/Navbar";
import './App.css'
import Intro from "./component/Intro/Intro";
import FloatingDiv from "./component/FloatingDiv/FloatingDiv";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro /> 
      <Service/>
      
    </div>
  );
}

export default App;
