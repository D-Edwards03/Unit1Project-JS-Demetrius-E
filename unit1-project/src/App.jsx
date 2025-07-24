import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
      <div className='App'>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
  )
}

export default App
