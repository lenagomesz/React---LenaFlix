import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';

import Header from './Header';
import Home from './Home';
import MovieDetail from './MovieDetail';
import Recommendations from './Recommendations';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/recomendacoes" element={<Recommendations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;