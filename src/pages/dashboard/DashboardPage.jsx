import React, { useState } from "react";
import styled from "styled-components";
import { AMainContent, PMainContent } from "./mainContent";
import { Calendar } from "../../components";
import { useSelector } from "react-redux";

const Container = styled.div`
    /* box-sizing: border-box; */
    display: grid;
    width: 100%;
    height: 100%;
    color: white;
    min-width: 1000px;

    grid-template-rows: 10%;
    grid-template-columns: 20%;
    /* Container자식 컴포넌트의 row의 길이 */
    grid-template-areas:
        "main main main main"
        "sidebar content content content";
    /* "sidebar content content content"; */
    text-align: center;
    grid-gap: 5px;
`;

const Main = styled.main`
    background: rgba(170, 200, 170, 0.2);
    /* height: 30%; */
    border-radius: 20px;
    color: white;
    height: 100%;
    grid-area: main;
    padding: 0.25rem;
`;
const SideBar = styled.div`
    background: rgba(170, 200, 170, 0.2);
    border-radius: 20px;
    grid-area: sidebar;
    padding: 0.4rem;
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
    background: rgba(170, 200, 170, 0.2);
    padding: 0.25rem;
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    color: black;
    width: 100px;
    height: 30px;
`;

export default function HomePage() {
    const [lessons, setLessons] = useState(
        useSelector((state) => state.lessons.originLessons)
    );
    // lessons's State
    const selectedDate = "목요일";
    // Dummy date(selected)

    const todayLessonsName = lessons
        .map((lesson) => {
            if (lesson.date === selectedDate) {
                return lesson.name;
            }
        })
        .filter((value) => !!value);
    console.log("todayLessonsName :>> ", todayLessonsName);

    const [targetLessonMembers, setTargetLessonMembers] = useState("");

    const ClickLesson = (e) => {
        let includedMembers = [];
        lessons.map((lesson) => {
            if (lesson.name === e.target.name) {
                includedMembers = [...lesson.members];
            }
        });
        // included members of clicked lesson
        setTargetLessonMembers(includedMembers);
    };

    const LessonButton = () =>
        todayLessonsName.map((lessonName) => (
            <Button name={lessonName} onClick={ClickLesson}>
                {lessonName}
            </Button>
        ));
    // create lesson button

    return (
        <Container>
            <Main>
                <Button>Attendance</Button>
                <Button>Payment</Button>
            </Main>
            <SideBar>
                <Calendar></Calendar>
                {LessonButton()}
            </SideBar>
            <ContentBox>
                <MainContentBox>
                    <AMainContent value={targetLessonMembers || []} />
                    {/* <PMainContent /> */}
                </MainContentBox>
            </ContentBox>
        </Container>
    );
}
