import React, { useState } from "react";
import styled from "styled-components";
import MainContent from "./mainContent";
import {
    ModalBox,
    HorizontalWrapper,
    VerticalWrapper,
    Input,
    Title,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
    newName,
    newAge,
    newId,
    addMember,
    removeMember,
} from "../../redux/reducers/membersReducer";

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

const Button = styled.button`
    width: 100px;
    height: 30px;
`;

let idValue = 15;
export default function HomePage() {
    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.originMembers);
    const selectedMembers = useSelector((state) => state.members.selected);
    const newbie = useSelector((state) => state.members.newbie);
    const newbieName = useSelector((state) => state.members.newbie.firstName);
    const newbieAge = useSelector((state) => state.members.newbie.age);

    const remove = () => {
        let recentMember = members.filter((x) => !selectedMembers.includes(x));
        dispatch(removeMember({ updateMembers: recentMember }));
    };

    const updateName = (e) => {
        dispatch(newId({ id: ++idValue }));
        dispatch(newName({ firstName: e.target.value }));
    };
    const updateAge = (e) => {
        dispatch(newAge({ age: e.target.value }));
    };
    const updateMember = () => {
        dispatch(addMember({ newMember: newbie }));
        setModal(false);
    };

    const [modal, setModal] = useState(false);

    return (
        <Container>
            <Main>
                Main
                <Button onClick={remove}>Remove</Button>
                <Button onClick={() => setModal(true)}>New Member</Button>
                <ModalBox width="200px" height="20%" visible={modal}>
                    <VerticalWrapper alignItems="center">
                        <Title text="New Member"></Title>
                        <Button onClick={updateMember}>add</Button>
                        <Input
                            onChange={updateName}
                            type="text"
                            value={newbieName}
                            name="Name"
                            placeholder="name"
                        ></Input>
                        <Input
                            name="Age"
                            type="number"
                            value={newbieAge}
                            onChange={updateAge}
                            placeholder="age"
                        ></Input>
                    </VerticalWrapper>
                </ModalBox>
            </Main>
            <ContentBox>
                <MainContentBox>
                    <MainContent />
                </MainContentBox>
            </ContentBox>
        </Container>
    );
}
