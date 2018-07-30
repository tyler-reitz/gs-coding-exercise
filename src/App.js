import React, { Component, Fragment } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import "./App.css"
import Assessment from "./components/assessment"
import FourOhFour from "./components/404"

class App extends Component {
  render() {
    return (
      <div className="App bg-light p-4 p-md-5">
        <h2 className="text-muted">Welcome Robert Ferraro</h2>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/assessment" />
            <Route path="/assessment" component={Assessment} />
            <Route path="*" component={FourOhFour} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
