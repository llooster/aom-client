import React from "react";
import { Row, Col, Radio as AntdRadio } from "antd";
import "./Radio.scss";

/***
 *  buttons = [
 *      { "value": "a", "label": "A" }
 *  ]
 */
const Radio = (props) => {
    
    const { value, buttons, onChange } = props;

    const renderButtons = () =>{
        return buttons.map((button) => {
            return <AntdRadio.Button value={button.value}>{button.label}</AntdRadio.Button>
        })
    }

    return <Row className="Radio">
        <Col span={24}>
            <AntdRadio.Group 
                defaultValue={value} 
                buttonStyle="solid"
                onChange={onChange}
            >
                {renderButtons()}
            </AntdRadio.Group>
        </Col>
    </Row>
}

export default Radio;