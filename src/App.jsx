import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  return(
    <div className="background-wrapper">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;