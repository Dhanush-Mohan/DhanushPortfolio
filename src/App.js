import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Experience></Experience>
    </div>
  );
}

export default App;
