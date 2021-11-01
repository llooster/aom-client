import React, { useState } from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";

const Buttons = styled(Link)`
    box-sizing: border-box;

    /* background-color: white; */
    text-decoration: none;
    outline: none;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    width: 185px;
    height: 35px;
    font-size: 15px;
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
    const { type, text } = props;
    return (
        <>
            <Buttons to={type}>{text}</Buttons>
        </>
    );
}

export default ButtonBox;
