import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Process from "./components/Process"
import Solutions from "./components/Solutions"
import CaseStudy from "./components/CaseStudy"
function App() {
  return (
    <div className="App">
   <Header />
   <Hero />
   <About />
   <Process />
   <Solutions />
   <CaseStudy/>
    </div>
  );
}

export default App;
