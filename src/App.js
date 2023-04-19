import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Store from './pages/Store';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`App${isDarkMode ? ' dark-mode' : ''}`}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route path="/store" element={<Store />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
