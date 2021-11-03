import React from "react";
import styled from "styled-components";

const Titles = styled.div.attrs(({ width, height, fontSize }) => ({
    width: width || "100%",
    height: height || "10%",
    fontSize: fontSize || "50px",
}))`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};

    box-sizing: border-box;
    /* Title 설정 */
    text-align: center;
    color: #3080e3;
`;
function Title(props) {
    const { text, width, height, fontSize } = props;
    return (
        <>
            <Titles width={width} height={height} fontSize={fontSize}>
                {text}
            </Titles>
        </>
    );
}
export default Title;
