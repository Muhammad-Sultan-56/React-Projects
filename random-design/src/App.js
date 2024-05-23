import './App.css';
// Bootstrap links
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"

// components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FurnitureSection from './components/FurnitureSection';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FurnitureSection></FurnitureSection>
    </>

  );
}

export default App;
