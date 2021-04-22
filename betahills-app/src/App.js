import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Process from "./components/Process"
import Solutions from "./components/Solutions"
import CaseStudy from "./components/CaseStudy"
import Impact from "./components/Impact"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
//import { Switch, Route } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
   <Header />
   <Hero />
   <About />
   <Solutions />
   <Process />
   <CaseStudy />
   <Impact />
   <Contact />
   <Footer />
</div>
  );
}

export default App;
