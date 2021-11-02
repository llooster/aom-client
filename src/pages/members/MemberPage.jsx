import React from "react";
import styled from "styled-components";
import VerticalWrapper from "../../components/wrapper/vertical";
import HorizontalWrapper from "../../components/wrapper/horizontal";
import Menu from "../../components/menu";
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
        /* "content content content content"; */
        "content content content content";
    /* "footer footer footer footer"; */
    text-align: center;
    grid-gap: 5px;
`;

const NavBar = styled.nav`
    background: #aaaaf5;
    grid-area: nav;
    padding: 0.25rem;
`;
const Main = styled.main`
    background: #afa1a8;
    /* height: 30%; */
    color: white;
    grid-area: main;
    padding: 0.25rem;
`;
const SideBar = styled.div`
    background: #9aaab7;
    grid-area: sidebar;
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
const Content1 = styled.div`
    background: #a6b8b9;
    padding: 0.25rem;
    width: 100%;
    height: 100%;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;

const Footer = styled.footer`
    background: #ff9637;
    grid-area: footer;
    padding: 0.25rem;
`;

function HomePage() {
    return (
        <Container>
            <Main>Main</Main>
            <ContentBox>
                <HorizontalWrapper justifyContent="space-around">
                    <Content1>Content1</Content1>
                    {/* <Content2>Content2</Content2>
                    <Content3>Content3</Content3> */}
                </HorizontalWrapper>
            </ContentBox>
        </Container>
    );
}
export default HomePage;
