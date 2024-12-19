import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';

// Assuming you have other pages like About, Contact, etc.
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <div className='max-w-full sm:max-w-[540px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px]  mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
