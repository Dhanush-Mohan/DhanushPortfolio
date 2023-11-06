import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default App;
