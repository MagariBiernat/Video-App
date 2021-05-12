import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import FavouritePage from "./views/FavouritePage"
import MainPage from "./views/MainPage"
// youtube
//  https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2C%20snippet%2C%20statistics&id=vJ3a_AuEW18&key=[YOUR_API_KEY]

// VIMEO
// https://api.vimeo.com/videos/181696349?access_token=[api_key]

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/favourite" exact component={FavouritePage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
