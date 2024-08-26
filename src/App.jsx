import React from 'react';
import Navbar from "./sections/Navbar"; // Ensure the correct path
import Hero from "./sections/Hero"; // Ensure the correct path
import About from "./sections/About"; 
import Products from './sections/products';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
    </>
  );
}

export default App;
