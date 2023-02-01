import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { FloatingShapes } from './components/floating-shapes/FloatingShapes';
import { MouseTrail } from './components/mouse-trail/MouseTrail';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <MouseTrail />
      <FloatingShapes />
      <Navbar />

      <Outlet />
    </div>
  );
}

export default App;
