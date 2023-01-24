import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { MouseTrail } from './components/mouse-trail/MouseTrail';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <MouseTrail />
      <Navbar />

      <Outlet />
    </div>
  );
}

export default App;
