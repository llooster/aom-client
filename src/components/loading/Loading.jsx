import React from "react";
import styled from "styled-components";
import { Spin } from "antd";

// const Whole = styled.div.attrs(({}) => ({}))`
const Whole = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 100px;
`;

const Loading = () => {
    return (
        <Whole>
            <Spin tip="Loading...">
                {/* <Alert message="" description="" type="info" /> */}
            </Spin>
        </Whole>
    );
};

export default Loading;
