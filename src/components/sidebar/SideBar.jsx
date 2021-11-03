import React from "react";
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

const renderMenus = () => {
    return Object.keys(menus).map((label) => {
        return <div key={label} className="menu">
            <div className="label">
                <span>{label}</span>
            </div>
            {
                menus[label].map((item) => {
                    return <a key={item.path} className="menu-item">
                        <div className="menu-icon">
                            <Icon icon={item.icon} />
                        </div>
                        <div className="menu-label">
                            <span>{item.label}</span>
                        </div>
                    </a>
                })
            }
        </div>
    });
}

const SideBar = () => {
    return <Col span={24} className="SideBar">
        <div className="logo">
            AOM
        </div>
        {renderMenus()}
    </Col> 
}

export default SideBar;