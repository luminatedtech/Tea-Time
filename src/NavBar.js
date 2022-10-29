import React from "react"
import {NavLink} from "react-router-dom"
const linkStyles = {
    display: "inline-block",
    width: "auto",
  
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return (
        <div>
            <NavLink
                to ="/"
                exact
                style ={linkStyles}>
                    Home
            </NavLink>
            <NavLink
                to = "/about"
                exact
                style ={linkStyles}
                >
                About
            </NavLink>
            <NavLink
                to = "/teas"
                exact
                style = {linkStyles}>
                    Teas
            </NavLink>
            <NavLink
               to = "/addTeas"
               exact
               style = {linkStyles}>
                Tea Form
            </NavLink>
        </div>
    )
}

export default NavBar