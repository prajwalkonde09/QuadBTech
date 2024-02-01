import React from 'react';
import './styles/home.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Summary from './components/Summary';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Summary />} />
      </Routes>
    </Router>
  );
};

export default App;