import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import Video from "./Components/Video";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/videos/:id" component={Video} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
