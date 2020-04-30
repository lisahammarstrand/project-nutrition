import React from "react"
import { Route, Link } from "react-router-dom"
import "./nav.css"

export const Nav = () => {
  return (
    <header>
      <h1>Vegan, Vegetarian and Where?</h1>
      {/* <Route path="/scanproduct">
        <Link className="back-link" to="/"> */}
      <i className="fas fa-arrow-circle-left"></i>
          Back
      {/*   </Link>
      </Route> */}
    </header>
  )
}