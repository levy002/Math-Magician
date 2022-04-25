import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar/Navbar';
import Quotes from './components/quotes/Quotes';
import Home from './components/homePage/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<App />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  </StrictMode>,
);
