import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Home';

const App = () => {
  return (
    <>
    
      <header>
      <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Form">Order</Link>
        
        </div>
        </header>
      
      <Home></Home>
    </>
  );
};
export default App;
