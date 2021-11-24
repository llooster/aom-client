import React from "react";
import { Row, Col } from "antd";
import { MdDone } from "react-icons/md";
import "./Alert.scss";

const icons = {
    "success": <MdDone />
}

const Alert = (props) => {

    const { className, type, label, isShow } = props;

    const renderAlert = () => {
        return <Row className={"Alert"}>
            <Col className={["alert-box", type, className].join(" ")} span={24}>
                <span className="icon">{icons[type]}</span>
                <span className="label">{label}</span>
            </Col>
        </Row>
    }

    return isShow ? renderAlert() : null;
}

export default Alert;