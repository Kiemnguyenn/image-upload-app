import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContent from './AppContent';
import Show from './show';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;