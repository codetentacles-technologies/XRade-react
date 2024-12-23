import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

// Assuming you have other pages like About, Contact, etc.
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <div className='max-w-full sm:max-w-[400px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px]  mx-auto px-4 py-8'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
