import About from "./components/about/About";
import NavBar from "./components/header/NavBar";
import HeroSection from "./components/hero/HeroSection";
import Pricing from "./components/pricing/Pricing";

import "./App.css";
import NotFound from "./components/notfound/NotFound";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="app__main">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
