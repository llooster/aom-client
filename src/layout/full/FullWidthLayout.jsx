import React from "react";
import { Row, Col } from 'antd';
import { V2Header } from "../../components";
import "./FullWidthLayout.scss";

const FullWidthLayout = (props) => {
    
    const { children } = props;
   
    return <Row className="FullWidthLayout">
        <Col span={24} className="header">
            <V2Header/>
        </Col>
        <Col span={24} className="container">
            <div className="content">{children}</div>
        </Col>
    </Row>
}

export default FullWidthLayout;
