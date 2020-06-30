import React, { Component } from "react";
import "./App.css";

import { Route, BrowserRouter, HashRouter, Switch } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Policy from "./components/Policy";
import Add from "./components/Add";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/policy" component={Policy} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
