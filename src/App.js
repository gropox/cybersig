import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Signing from "./components/signing";
import NavBar from "./navbar";


import Bidname from "./components/templates/cyberway/bidname";
import Bidrefund from "./components/templates/cyberway/bidrefund";
import Transfer from "./components/templates/cyberway/transfer";
import TempaltesOverview from "./components/templates/overview"

import GolosUpvote from "./components/templates/golos/upvote";
import GolosDelegate from "./components/templates/golos/delegate";

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
                <Route exact path="/templates/cyberway/bidrefund">
                  <Bidrefund props={{ ...props }} />
                </Route>
                <Route exact path="/templates/cyberway/transfer">
                  <Transfer props={{ ...props }} />
                </Route>
                <Route exact path="/templates/golos/upvote">
                  <GolosUpvote props={{ ...props }} />
                </Route>
                <Route exact path="/templates/golos/delegate">
                  <GolosDelegate props={{ ...props }} />
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
