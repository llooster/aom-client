import React from "react";
import styled from "styled-components";

export const StyledVerticalWrapper = styled.div.attrs(
    ({ width, height, backColor, justifyContent, alignItems, padding }) => ({
        width: width || "transparent",
        height: height || "transparent",
        padding: padding || "0",
        backgroundColor: backColor || "white",
        justifyContent: justifyContent || "center",
        alignItems: alignItems || "center",
    })
)`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.backgroundColor};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};

    box-sizing: border-box;
    margin: 0;

    display: flex;
    flex-direction: column;
`;

const VerticalWrapper = (props) => {
    const {
        children,
        width,
        height,
        padding,
        backColor,
        justifyContent,
        alignItems,
    } = props;
    return (
        <StyledVerticalWrapper
            width={width}
            height={height}
            padding={padding}
            backColor={backColor}
            justifyContent={justifyContent}
            alignItems={alignItems}
        >
            {children && children}
        </StyledVerticalWrapper>
    );
};

export default VerticalWrapper;
