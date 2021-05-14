import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import FavouritePage from "./views/FavouritePage"
import MainPage from "./views/MainPage"

function App() {
  return (
    <div className="App" style={{ paddingTop: "50px" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
