import React, { Component } from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Policy from "./components/Policy";
import Add from "./components/Add";

// PAGES
import Crypto from "./components/Pages/Crypto";
import Payment from "./components/Pages/Payment";
import Productivity from "./components/Pages/Productivity";
import Travel from "./components/Pages/Travel";
import Shopping from "./components/Pages/Shopping";
import Miscallaneous from "./components/Pages/Miscallaneous";
import All from "./components/Pages/All";

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

        {/* PAGES */}
        {/* 0. All */}
        <Switch>
          <Route exact path="/all" component={All} />
        </Switch>
        {/* 1. CRYPTO */}
        <Switch>
          <Route exact path="/crypto" component={Crypto} />
        </Switch>
        {/* 2. PAYMENT */}
        <Switch>
          <Route exact path="/payment" component={Payment} />
        </Switch>
        {/* 3. Productivity */}
        <Switch>
          <Route exact path="/productivity" component={Productivity} />
        </Switch>
        {/* 4. Travel */}
        <Switch>
          <Route exact path="/travel" component={Travel} />
        </Switch>
        {/* 5. Shopping */}
        <Switch>
          <Route exact path="/shopping" component={Shopping} />
        </Switch>
        {/* 6. Other */}
        <Switch>
          <Route exact path="/miscallaneous" component={Miscallaneous} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
