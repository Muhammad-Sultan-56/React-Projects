
// Bootstrap links
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"

// app css
import './App.css';

// components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FurnitureSection from './components/FurnitureSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FurnitureSection></FurnitureSection>
      <AboutSection></AboutSection>
      <BlogSection></BlogSection>
      <TestimonialSection></TestimonialSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>

  );
}

export default App;
