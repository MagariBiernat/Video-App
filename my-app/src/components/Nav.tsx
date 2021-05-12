import React from "react"
import { Link } from "react-router-dom"
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/favourite">Favourite</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
