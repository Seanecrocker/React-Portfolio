import React from 'react';
import './App.css'; // Keep the existing CSS import
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header /> {/* Header component appears on all pages */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer /> {/* Footer component appears on all pages */}
    </Router>
  );
}

export default App;