import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";
import Certificates from "./assets/components/Certificates";
import Contact from "./assets/components/Contact";
import Reference from "./assets/pages/reference";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
