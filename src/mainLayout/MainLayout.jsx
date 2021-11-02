import React from "react";
import styled from "styled-components";
import Menu from "../components/menu";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
    /* box-sizing: border-box; */
    display: grid;
    width: 100vw;
    height: 100vh;
    color: white;
    min-width: 1000px;
    /* background-color: red; */

    grid-template-rows: 10% 75% 15%;
    /* Container자식 컴포넌트의 row의 길이 */
    grid-template-areas:
        "nav nav nav nav"
        "content content content content"
        "footer footer footer footer";
    text-align: center;
    grid-gap: 5px;
`;

const NavBar = styled.nav`
    background: #aaaaf5;
    grid-area: nav;
    padding: 0.25rem;
`;

const ContentBox = styled.div`
    display: flex;

    /* background-color: red; */
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: center;
    grid-area: content;
    justify-content: center;
`;
const Footer = styled.footer`
    background: #ff9637;
    grid-area: footer;
    padding: 0.25rem;
`;

function MainLayout(props) {
    const { children } = props;
    return (
        <Container>
            <NavBar>
                NavBar
                <Menu />
            </NavBar>
            <ContentBox>{children && children}</ContentBox>
            <Footer>Footer</Footer>
        </Container>
    );
}
export default MainLayout;
