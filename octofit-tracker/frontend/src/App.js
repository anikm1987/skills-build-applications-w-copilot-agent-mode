
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Teams from './components/Teams';
import Leaderboard from './components/Leaderboard';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import logo from './logo.svg'; // Replace with './octofitapp-small.png' if available

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/workouts">Workouts</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

function Home() {
  return (
    <main style={{ padding: '40px' }}>
      <h2>Welcome to OctoFit!</h2>
      <p>Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
      <button className="btn">Get Started</button>
    </main>
  );
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Octofit Logo" />
        <h1>OctoFit Tracker</h1>
      </header>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
