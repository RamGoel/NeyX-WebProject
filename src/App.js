import React from 'react';
import './style.css';
import HomePage from './components/Home/HomePage';
import NavBar from './components/NavBar/NavBar';
import Working from './components/Working/Working';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div className="homePageMain">
      <NavBar />
      <HomePage />
      <Working />
    </div>
  );
}
