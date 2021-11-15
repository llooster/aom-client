import React from "react";
import { Row, Col } from "antd";
import "./Box.scss";

const Box = (props) => {
    
    const { label, children } = props;
    
    return <Row className="Box">
        <Col span={24}>
            <Col className="label" span={24}>{label}</Col>
            <Col className="box-body" span={24}>{children}</Col>
        </Col>
    </Row>
}

export default Box;