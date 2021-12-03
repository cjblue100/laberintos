import React, { Component } from "react";
import { render } from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaHome from "./Componentes/PaginaHome";
import Prim from "./Componentes/Prim";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
     <Routes>

       <Route exact path="/" element={<PaginaHome/>}/>
       <Route exact path="/prim" element={<Prim/>}/>
    
       </Routes>
    </Router>
    </div>
  );
}

export default App;
