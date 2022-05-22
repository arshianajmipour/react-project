import React from "react";
import "./Navbar.css";
function Navbar() {
    return(
        <ul className="navbar1">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/News">News</a></li>
        </ul>

    )
}
export default Navbar;