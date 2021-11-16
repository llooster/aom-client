import React from "react";
import { Row, Col } from "antd";
import "./Transfer.scss";

const Transfer = (props) => {
    
    const { left, right } = props;

    const renderLeft = () => {

    }

    const renderRight = () => {
        
    }

    const renderList = (header) => {
        const list = [
            { id: 1, checked: true, label: "LHK" },
            { id: 2, checked: false, label: "LHK" },
            { id: 3, checked: false, label: "LHK" },
            { id: 4, checked: false, label: "LHK" },
            { id: 5, checked: false, label: "LHK" },
            { id: 6, checked: false, label: "LHK" },
            { id: 7, checked: false, label: "LHK" },
        ];

        return  <Col span={12}>
                    <Col span={24}>
                        {list.map((item, index) => {
                            return renderLabel(index, item.checked, item.label);
                        })} 
                    </Col>
                </Col>
    }

    const renderLabel = (key, checked, label) => {
        return  <Col key={key} span={24}>
                    <input type="checkbox" />
                    <label>{label}</label>
                </Col>
    }

    return  <Row className="Transfer">
                <Col className="transfer-header" span={24}>
                    <button>JOIN</button>
                    <button>JOIN</button>
                </Col>
                <Col className="transfer-content" span={24}>
                    { renderList("LEFT") }
                    { renderList("RIGHT") }
                </Col>
                <Col className="transfer-footer" span={24}>

                </Col>
            </Row>
}

export default Transfer;