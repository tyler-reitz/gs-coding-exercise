import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"
import Assessment from "./components/assessment"
import FourOhFour from "./components/404"

class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <h1>Welcome Robert Ferraro</h1>
        <Router>
          <Switch>
            <Route path="/assessment" component={Assessment} />
            <Route path="*" component={FourOhFour} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
