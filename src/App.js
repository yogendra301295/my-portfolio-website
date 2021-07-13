import "./components/contact/contact.jsx" 
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Works from "./components/work/work.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx"
import Contact from "./components/contact/contact.jsx";
import Menu from "./components/menu/menu.jsx"
import About from "./components/about/about.jsx";
import "./app.scss"; 
import{ useState } from "react";
import Fixed from "./components/fixed/fixed.jsx";
// import Card from "./components/card/card.jsx"
 


function App() {
  
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app"> 
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
     <Fixed/>
    <div className="sections">  
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <Intro/> 
     
      <About/>     
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
      {/* <Card/> */}
    </div>
    </div>
  );
}

export default App;
