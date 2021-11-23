import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { Col } from 'antd';
import "./V2Header.scss";

const menus = [
    { "path": "/payment", "key": "payment", "icon": "barChart", "label": "Payment" },
    { "path": "/attendance", "key": "attendance", "icon": "barChart", "label": "Attendance" },
    { "path": "/lessons", "key": "lessons", "icon": "form", "label": "Lesson" },
    { "path": "/members", "key": "members", "icon": "user", "label": "Member" }
];

const renderMenus = (currentPath) => {
    
    let pathKey = currentPath.split("/")[1];    

    return menus.map((item) => {
            return  <Link 
                        key={item.key} 
                        className={item.key === pathKey ? "menu-item selected" : "menu-item"}
                        to={item.path}
                    >
                        <div className="menu-label">
                            <span>{item.label}</span>
                        </div>
                    </Link>
            });
}

const V2Header = (props) => {

    const location = useLocation();
    const { pathname } = location;

    return <Col className="V2Header" span={24} >
        <div className="logo">
            AOM
        </div>
        {renderMenus(pathname)}
    </Col> 
}

export default V2Header;