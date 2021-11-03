import React from "react";
import "./Header.scss";

const Header = (props) => {
    return <header className="Header">
        <div className="toolbar">
            <img className="img img-user" src={"/images/user.png"} alt="user" />
        </div>
    </header>
}

export default Header;