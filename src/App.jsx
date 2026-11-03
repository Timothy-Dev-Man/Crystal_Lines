import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToHash } from './Helpers/ScrollToHash.js'

import Header from "./Sections/Header.jsx";
import Hero from "./Sections/Hero.jsx";
import AboutMe from "./Sections/AboutMe.jsx";
import Gallery from "./Sections/Gallery.jsx";
import Contact from "./Sections/Contact.jsx";

import Work from "./Sections/Work.jsx";

function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;