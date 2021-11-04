import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import "./Input.scss";

const StyledTextLabel = styled.div`
    box-sizing: border-box;
    color: gray;
    font-size: 14px;
    width: 100%;
`;

const StyledInputs = styled.input.attrs(({ type, placeholder, id }) => ({
    id: id,
    type: type,
    placeholder: placeholder,
}))`
    box-sizing: border-box;
    width: 100%;
    background-color: white;
    height: 35px;
    font-size: 15px;
    border: solid gray 0.5px;
    outline: none;
    border-radius: 5px;
    color: gray;
`;
const InputBox = (props) => {
    const { id, name, type, value, placeholder, onChange } = props;

    return (
        <Row className="Input">
            <Col span={24}>
                <StyledTextLabel className="label">{name}</StyledTextLabel>
                <StyledInputs
                    id={id}
                    type={type}
                    value={value || ""}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

export default InputBox;
