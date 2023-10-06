import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./index.css"; 
import ImageSlider from "./ImageSlider"
import Footer from "./Footer";




function App() {
  return (
    <Router>
      <nav className="header">
        <Link to="">The</Link>
        <Link to="">Most</Link>
        <Link to="">Beautiful</Link>
        <Link to="">Pictures</Link>
      </nav>
      <h1 className="beautiful">Beautiful pictures</h1>
      <ImageSlider />
      <Footer />
    </Router>
  );
}

export default App;