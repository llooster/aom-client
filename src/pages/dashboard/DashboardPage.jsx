import React, { useState } from "react";
import styled from "styled-components";
import { AMainContent, PMainContent } from "./mainContent";
import { Button } from "../../components";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
    /* box-sizing: border-box; */
    display: grid;
    width: 100%;
    height: 100%;
    color: white;
    min-width: 1000px;
    /* background-color: gray; */

    grid-template-rows: 10%;
    grid-template-columns: 20%;
    /* Container자식 컴포넌트의 row의 길이 */
    grid-template-areas:
        "main main main main"
        "content content content content";
    text-align: center;
    grid-gap: 5px;
`;

const Main = styled.main`
    background: #afa1a8;
    /* height: 30%; */
    color: white;
    height: 100%;
    grid-area: main;
    padding: 0.25rem;
`;

const ContentBox = styled.div`
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: center;
    grid-area: content;
    justify-content: center;
`;
const MainContentBox = styled.div`
    background: #a6b8b9;
    padding: 0.25rem;
    width: 100%;
    height: 100%;
`;

// const Button = styled.button`
//     width: 100px;
//     height: 30px;
// `;

export default function HomePage() {
    return (
        <Container>
            <Main>
                <Button width="80px" height="30px" text={"A"}></Button>
                <Button width="80px" height="30px" text={"P"}></Button>
            </Main>
            <ContentBox>
                <MainContentBox>
                    <AMainContent />
                    {/* <PMainContent /> */}
                </MainContentBox>
            </ContentBox>
        </Container>
    );
}
