import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaHome from "./Componentes/PaginaHome";
import Prim from "./Componentes/Prim";
import NavBar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
       <NavBar> </NavBar>
      
       <Switch>

          <Route exact path="/" exact component={PaginaHome}></Route>
          <Route exact path="/prim" component={Prim} />

      </Switch>
       <Footer></Footer>
    </div>
  );
}

export default App;
