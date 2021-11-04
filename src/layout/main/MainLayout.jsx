import React from "react";
import { Row, Col } from 'antd';
import { Header, SideBar } from "../../components";
import "./MainLayout.scss";

const MainLayout = (props) => {
    
    const { children } = props;
   
    return <Row className="MainLayout">
        <Col xs={0}  sm={6}  className="sidebar">
            <SideBar/>
        </Col>
        <Col xs={24} sm={18} className="container">
            <Header />
            <div className="content">{children}</div>
        </Col>
    </Row>
}

export default MainLayout;
