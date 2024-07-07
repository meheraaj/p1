import About from "./components/about/About";
import NavBar from "./components/header/NavBar";
import HeroSection from "./components/hero/HeroSection";

function App() {
  return (
    <div className="app__main">
      <NavBar />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
