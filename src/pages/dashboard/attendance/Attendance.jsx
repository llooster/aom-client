import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Calendar } from "../../../components";
import { useSelector } from "react-redux";
import AttendanceContent from "./AttendanceContent";

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
    /* background: rgba(170, 200, 170, 0.2); */
    /* height: 30%; */
    border-radius: 20px;
    color: white;
    height: 100%;
    grid-area: main;
    padding: 0.25rem;
`;
const SideBar = styled.div`
    /* background: rgba(170, 200, 170, 0.2); */
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
    /* background: rgba(170, 200, 170, 0.2); */
    padding: 0.25rem;
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    color: black;
    width: auto;
    min-width: 120px;
    height: 30px;
`;

export default function Attendance() {
    const attendance = useSelector((state) => state.attendance.attendance);
    const [lessons, setLessons] = useState(
        useSelector((state) => state.lessons.lessons)
    );
    // 레슨 이름이 필요. 일단 lesson.json
    const selectedDate = "TUESDAY";
    // Dummy date(selected)

    // 날짜별 레슨(이름포함)목록이 필요
    const LessonButton = () =>
        lessons.map((lesson) => (
            <Button
                name={lesson}
                // onClick={clickLesson}
            >
                {lesson.name}
            </Button>
        ));
    // create lesson button

    const [targetLessonData, setTargetLessonData] = useState(
        attendance.members
    );
    // 기본 attendance -> 오늘 날짜
    const clickLesson = (e) => {
        setTargetLessonData(attendance);
    };

    console.log("attendance :>> ", attendance);
    // console.log("attendance.members :>> ", attendance.members);
    return (
        <Container>
            <Main>
                <Link to="/dashboard/payment">Payment</Link>
            </Main>
            <SideBar>
                <Calendar></Calendar>
                {LessonButton()}
            </SideBar>
            <ContentBox>
                <MainContentBox>
                    <AttendanceContent value={targetLessonData || []} />
                </MainContentBox>
            </ContentBox>
        </Container>
    );
}
