import React from 'react';
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <nav className="NavBar">
        <h1>Boba Buddy</h1>
        <ul>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </nav>
      <LandingPage />
    </div>
  );
}

export default App;
