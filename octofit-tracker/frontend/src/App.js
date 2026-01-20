import logo from './logo.svg'; // Replace with './octofitapp-small.png' if available
import './App.css';

function Navigation() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/activities">Activities</a>
      <a href="/teams">Teams</a>
      <a href="/leaderboard">Leaderboard</a>
      <a href="/workouts">Workouts</a>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Octofit Logo" />
        <h1>OctoFit Tracker</h1>
      </header>
      <Navigation />
      <main style={{ padding: '40px' }}>
        <h2>Welcome to OctoFit!</h2>
        <p>Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
        <button className="btn">Get Started</button>
      </main>
    </div>
  );
}

export default App;
