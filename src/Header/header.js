import React from "react";
import Navbar from "../Navbar/Navbar.js";
import "./header.css"
function Header() {
    return(
        <div className="hdr">
            <div className="title-of-header"><h3>React-project</h3></div>
            <div className="under-header">
                <Navbar/>
                {/*<input className="inp" placeholder="search something"/>*/}
            </div>


        </div>
    )
}
export default Header;