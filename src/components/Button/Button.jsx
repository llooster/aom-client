import React, { useState } from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";

// const LoginButtons = styled.button.attrs((props) => ({
//     background: props.text === "Login" ? "blue" : "yellow",
// }))`
const Buttons = styled.button`
    box-sizing: border-box;

    /* background-color: white; */
    text-decoration: none;
    outline: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    width: 185px;
    height: 35px;
    font-size: 13px;
    color: #77b4ff;
    border: solid #77b4ff 1px;
    background: white;
    &:hover {
        background: ${lighten(0.1, "#77b4ff")};
        border: none;
        color: white;
    }
    &:active {
        background: ${darken(0.1, "#77b4ff")};
        border: none;
        color: white;
    }
`;

function ButtonBox(props) {
    const [path, setPath] = useState(props.type);
    console.log("path :>> ", path);
    return (
        <>
            <Buttons to={path}>{props.text}</Buttons>
        </>
    );
}

export default ButtonBox;
