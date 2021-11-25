import React from "react";
import { Row, Col } from "antd";
import { V2Header } from "../../components";
import "./MainLayout.scss";

const MainLayout = (props) => {
    const { children } = props;

    return (
        <Row className="MainLayout">
            <Col span={24} className="header">
                <V2Header />
            </Col>
            <Col span={18} className="container">
                <div className="content">{children}</div>
            </Col>
        </Row>
    );
};

export default MainLayout;
