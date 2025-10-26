
import './App.css';
import Navbar from './sections/Navbar/Navbar';
import Footer from './sections/Footer/Footer';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
function App() {
  return  (
  <>
  <Navbar />
  <Hero />
  <Projects />
  <Skills />
  <Contact />
  <Footer />
  </>
  );
}

export default App;
