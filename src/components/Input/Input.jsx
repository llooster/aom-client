import React, { useState } from "react";
import styled from "styled-components";

const StyledTextLabel = styled.div`
    box-sizing: border-box;
    /* background-color: #ffff58; */
    color: gray;
    /* margin: 0 10px; */
    font-size: 14px;
    width: 100%;
`;

const StyledInputs = styled.input.attrs(({ type, placeholder }) => ({
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

function InputBox(props) {
    const { name, type, value, placeholder, onChange } = props;

    return (
        <>
            <StyledTextLabel>{name}</StyledTextLabel>
            <StyledInputs
                type={type}
                value={value || ""}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
}

export default InputBox;
