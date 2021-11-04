import React from "react";
import styled from "styled-components";

const Titles = styled.div.attrs(({ width, height, fontSize }) => ({
    width: width || "transparent",
    height: height || "transparent",
    fontSize: fontSize || "50px",
}))`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};

    box-sizing: border-box;
    /* Title 설정 */
    width: 100%;
    text-align: center;
`;

const Title = (props) => {
    const { text, width, height, fontSize, className } = props;

    return (
        <Titles
            className={className}
            width={width}
            height={height}
            fontSize={fontSize}
        >
            {text}
        </Titles>
    );
};

export default Title;
