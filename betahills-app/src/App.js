import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Process from "./components/Process"
import Solutions from "./components/Solutions"
import CaseStudy from "./components/CaseStudy"
import Impact from "./components/Impact"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
   <Header />
   <Hero />
   <About />
   <Process />
   <Solutions />
   <CaseStudy/>
   <Impact />
   <Contact />
    </div>
  );
}

export default App;
