import React from "react";
import "./Header.scss";

const Header = (props) => {
    return <header className="Header">
        <div className="toolbar">
            <div className="logo">LOGO</div>
            <div className="menu">
                <img className="img user"/>
                <img className="img setting"/>
            </div>
        </div>
    </header>
}

export default Header;