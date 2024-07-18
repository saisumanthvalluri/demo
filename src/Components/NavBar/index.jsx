import React from "react";
import "./index.css";

const NavBar = (props) => {
    const { btn, text } = props;
    return (
        <div className="nav">
            <h1>LOGO</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            {btn && <button id="BTN">{text}</button>}
        </div>
    );
};

export default NavBar;
