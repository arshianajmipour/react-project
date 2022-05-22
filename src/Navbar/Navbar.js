import React from "react";
import "./Navbar.css";
function Navbar() {
    return(
        <ul className="navbar1">
            <li><a href="/react-project/">Home</a></li>
            <li><a href="/react-project/About">About</a></li>
            <li><a href="/react-project/Contact">Contact</a></li>
            <li><a href="/react-project/News">News</a></li>
        </ul>

    )
}
export default Navbar;