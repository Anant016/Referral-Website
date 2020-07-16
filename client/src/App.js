import React, { Component } from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Policy from "./components/Policy";
import Add from "./components/Add";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/add" component={Add} />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
        <Switch>
          <Route exact path="/policy" component={Policy} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
