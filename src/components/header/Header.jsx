import React, { useState } from "react";
import { Icon } from '../../components';
import "./Header.scss";

const menus = [
    { "icon": "barChart", "label": "Logout" }
];

const Header = (props) => {
    
    const [isOpen, setOpen] = useState(false);

    const renderMenus = () => {
        return menus.map((menu) => {
            return <a className="menu">
                <div className="menu-icon">
                    <Icon icon={menu.icon} />
                </div>
                <div className="menu-label">
                    <span>{menu.label}</span>
                </div>
            </a>
        });
    }

    return <header className="Header">
        <div className="toolbar">
            <a className="user" onClick={() => setOpen(!isOpen)}>
                <img className="img img-user" src={"/images/user.png"} alt="user" />
            </a>
            {
                isOpen && <div className="popup">
                    <div className="profile">
                        <span className="">Good morning,</span>
                        <span className="nickname">Hangyeol</span>
                    </div>
                    <div className="popup-menus">
                        {renderMenus()}
                    </div>
                </div>
            }    
        </div>
    </header>
}

export default Header;