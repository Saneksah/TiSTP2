import React from "react";
import "./styles.css";
import Header from "./components/header";
import Home from "./components/Home";
import About from "./components/Utka";
import Users from "./components/Enot";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <a name = "top"></a>
         <Header/> 
        <Switch>
          <Route path="/utka">
            <About />
          </Route>
          <Route path="/enot">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <a href="#top" class="cnopka">
             <img class="UP" src = "123.jpg"> 
             </img>
             </a>
      </div>
    </Router>
  );
}
