import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/notfound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <div className='container py-[7rem]'>
                <Home />
              </div>
              <Footer />
            </>
          }
        />
        <Route 
          path="/Dashboard" 
          element={
            <>
              <Header />
              <div className='container py-[7rem]'>
                <Dashboard />
              </div>
              <Footer />
            </>
          } 
        />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
