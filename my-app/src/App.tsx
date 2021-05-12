import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
// import FavouritePage from "./views/FavouritePage"
import MainPage from "./views/MainPage"

function App() {
  return (
    <div className="App" style={{ paddingTop: "50px" }}>
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/favourite" exact component={FavouritePage} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
