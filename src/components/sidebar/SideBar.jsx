import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { Col } from 'antd';
import { Icon } from "../../components";
import "./SideBar.scss";

const menus = {
    "dashboard": [
        { "path": "/dashboard", "icon": "barChart", "label": "Dashboard" }
    ],
    "manage": [
        { "path": "/lessons", "icon": "form", "label": "Lesson" },
        { "path": "/members", "icon": "user", "label": "Member" }
    ]
}

const renderMenus = (currentPath) => {
    return Object.keys(menus).map((label) => {
        return <div key={label} className="menu">
            <div className="label">
                <span>{label}</span>
            </div>
            {
                menus[label].map((item) => {
                    return  <Link 
                                key={item.path} 
                                className={item.path === currentPath ? "menu-item selected" : "menu-item"}
                                to={item.path}
                            >
                                <div className="menu-icon">
                                    <Icon icon={item.icon} />
                                </div>
                                <div className="menu-label">
                                    <span>{item.label}</span>
                                </div>
                            </Link>
                })
            }
        </div>
    });
}



const SideBar = (props) => {

    const location = useLocation();
    const { pathname } = location;

    return <Col span={24} className="SideBar">
        <div className="logo">
            AOM
        </div>
        {renderMenus(pathname)}
    </Col> 
}

export default SideBar;