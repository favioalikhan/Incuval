//import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
*import viteLogo from '/vite.svg'*/
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro/emprendedor" element={<Register type="emprendedor" />} />
        <Route path="/registro/mentor" element={<Register type="mentor" />} />
      </Routes>
    </div>
  );
}

export default App;


