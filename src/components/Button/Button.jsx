import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";

const StyledButtons = styled(Link).attrs(({ width, height, fontSize }) => ({
    width: width || "transparent",
    height: height || "transparent",
    fontSize: fontSize || "15px",
}))`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};

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
    color: #77b4ff;
    border: solid #77b4ff 1px;
    background: white;
    &:hover {
        background: ${lighten(0.01, "#77b4ff")};
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
    const { type, text, width, height, fontSize } = props;
    return (
        <>
            <StyledButtons
                to={type}
                width={width}
                height={height}
                fontSize={fontSize}
            >
                {text}
            </StyledButtons>
        </>
    );
}

export default ButtonBox;
