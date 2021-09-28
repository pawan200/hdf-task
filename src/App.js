import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Match from "./components/Match/Match";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/match" component={Match} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
