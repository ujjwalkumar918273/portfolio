import About from "./components/About";
import Contact from "./components/Contact";
import Footer1 from "./components/Footer1";


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

import Sociallinks from "./components/Sociallinks";



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    <Sociallinks/>
    <About/>
    <Project/>
    <Skills/>
   <Contact/>
   <Footer1/>
  
    </div>
  );
}

export default App;
