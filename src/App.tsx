import React from 'react';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  const menuItems = ["Home", "TV Shows", "Movies"];
  
  return (
    <div className="App">
      <Navbar menuItems={menuItems} />
    </div>
  );
}

export default App;
