import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
// import { Switch, Route } from "react-router-dom";
// import axios from "axios";
import "./App.css";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="app">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
