import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Signing from "./components/signing";
import NavBar from "./navbar";


import Bidname from "./components/templates/cyberway/bidname";
import TempaltesOverview from "./components/templates/overview"

function App(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div>
            <Router>
              <Switch>
                <Route exact path="/">
                  <h1>Signing tool for cyberway!</h1>
                </Route>
                <Route exact path="/signing">
                  <Signing props={{ ...props }} />
                </Route>
                <Route exact path="/templates/">
                  <TempaltesOverview props={{ ...props }} />
                </Route>
                <Route exact path="/templates/cyberway/bidname">
                  <Bidname props={{ ...props }} />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
