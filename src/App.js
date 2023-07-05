import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Minimalism from './pages/Minimalism.js';
import FlatDesign from './pages/FlatDesign.js';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/multi-portfolio" element={<Minimalism />} />
          <Route exact path="/flatDesign" element={<FlatDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;