import React, { useState } from "react";
import styled from "styled-components";

const LoginInputs = styled.input.attrs((props) => ({
    type: props.type === "password" ? "password" : "text",
    placeholder: props.type === "password" ? "password" : "ID",
}))`
    box-sizing: border-box;

    background-color: transparent;
    height: 35px;
    color: rgb(96, 96, 96);
    font-size: 15px;
    border: solid gray 0.5px;
    outline: none;
    margin: 0 10px;
    border-radius: 5px;
`;

function InputBox(props) {
    let [inputTarget, setTarget] = useState(props.type);
    return (
        <>
            <LoginInputs type={inputTarget}></LoginInputs>
        </>
    );
}

export default InputBox;
