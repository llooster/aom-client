import React from "react";
import styled from "styled-components";

const StyledHorizontalWrapper = styled.div.attrs(
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
    /* 전체 가로 중앙 정렬 */
    /* background-color: #f5f0f0; */
    display: flex;
    /* border-radius: 10px; */
`;

const HorizontalWrapper = (props) => {
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
        <StyledHorizontalWrapper
            width={width}
            height={height}
            padding={padding}
            backColor={backColor}
            justifyContent={justifyContent}
            alignItems={alignItems}
        >
            {children && children}
        </StyledHorizontalWrapper>
    );
};

export default HorizontalWrapper;
