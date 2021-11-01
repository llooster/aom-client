import React from "react";
import styled from "styled-components";

const Titles = styled.div`
    box-sizing: border-box;
    /* Title 설정 */
    width: 100%;
    height: 100px;
    font-size: 80px;
    text-align: center;
    color: #3080e3;
`;
function Title(props) {
    const { text } = props;
    return (
        <>
            <Titles>{text}</Titles>
        </>
    );
}
export default Title;
