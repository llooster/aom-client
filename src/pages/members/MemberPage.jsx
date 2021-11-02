import React from "react";
import styled from "styled-components";
import MainContent from "./mainContent";
import { useSelector, useDispatch } from "react-redux";
import { addMember, removeMember } from "../../redux/reducers/membersReducer";

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

const Main = styled.main`
    background: #afa1a8;
    /* height: 30%; */
    color: white;
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

const Button = styled.button`
    width: 100px;
    height: 30px;
`;

export default function HomePage() {
    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.originMembers);
    const checkedMembers = useSelector((state) => state.members.selected);

    const remove = () => {
        // console.log("checkedMembers :>> ", checkedMembers);
        //members == 기존 멤버 배열, checkedMembers == 삭제할 멤버 배열
        let recentMember = members.filter(
            (member, index1) =>
                member !=
                checkedMembers.map((item, index2) => checkedMembers[index2])
        );
        console.log("recentMember :>> ", recentMember);
    };

    return (
        <Container>
            <Main>
                Main
                <Button onClick={remove}>Remove</Button>
            </Main>
            <ContentBox>
                <MainContentBox>
                    <MainContent />
                </MainContentBox>
            </ContentBox>
        </Container>
    );
}
