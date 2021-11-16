import React from "react";
import { Row, Col, TimePicker } from "antd";
import "./RangePicker.scss";

const RangePicker = (props) => {

    const { className, value, onChange } = props;

    return <Row className="RangePicker">
        <Col span={24}>
            <TimePicker.RangePicker 
                className={[className]}
                format={"HH:mm"}
                minuteStep={30}
                use12Hours={true}
                value={value}
                onChange={onChange}
            />
        </Col>
    </Row>
}

export default RangePicker;