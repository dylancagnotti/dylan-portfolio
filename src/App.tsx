import React from 'react';
import './App.scss';
import { MouseTrail } from './components/mouse-trail/MouseTrail';

function App() {
  return (
    <div className="App">
      <MouseTrail />
      <a href="/">Home</a>
      <a href="/contacts">Contacts</a>
    </div>
  );
}

export default App;
