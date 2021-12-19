import React from "react";
import { Switch, Route } from "react-router-dom";
import PaginaHome from "./Componentes/PaginaHome";
import Prim from "./Componentes/Prim";
import NavBar from "./Componentes/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>

      <Switch>
        <Route exact path="/" component={PaginaHome}></Route>
        <Route exact path="/prim" component={Prim} />
      </Switch>
    </div>
  );
}

export default App;
