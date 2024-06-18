import React from 'react';
import './App.css';

import Order from './components/testOrder';
import Login from './components/testLogin';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <Order />
      <Login />
    </div>
  );
}

export default App;
