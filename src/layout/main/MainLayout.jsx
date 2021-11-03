import React from "react";
import { Row, Col } from 'antd';
import { Icon, SideBar } from "../../components";
import "./MainLayout.scss";

const MainLayout = (props) => {
    
    const { children } = props;
   
    return <Row className="MainLayout">
        <Col xs={0}  sm={6}  className="sidebar">
            <SideBar/>
        </Col>
        <Col xs={24} sm={18} className="container">
            <div className="header">HEADER</div>
            <div className="content">CONTENT</div>
        </Col>
    </Row>
}

export default MainLayout;
