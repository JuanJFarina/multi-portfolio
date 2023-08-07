import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Minimalism from './pages/Minimalism.jsx';
import FlatDesign from './pages/FlatDesign.jsx';
import MicroInteractions from './pages/MicroInteractions.jsx';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Minimalism />} />
        <Route exact path="/multi-portfolio" element={<Minimalism />} />
        <Route exact path="/flatDesign" element={<FlatDesign />} />
        <Route exact path="/microInteractions" element={<MicroInteractions />} />
      </Routes>
    </Router>
  );
}

export default App;