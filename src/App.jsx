import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
    </>
  );
}

export default App;