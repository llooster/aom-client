import React, { useState } from "react";
import { Row, Col } from "antd";
import { V2Calendar } from "../../../components";
import { useSelector } from "react-redux";
import AttendanceContent from "./AttendanceContent";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
    /* box-sizing: border-box; */
    display: grid;
    width: 100%;
    height: 100%;
    color: white;
    min-width: 1000px;

    // grid-template-rows: 10%;
    // grid-template-columns: 20%;
    /* Container자식 컴포넌트의 row의 길이 */
    // grid-template-areas:
    //     "main main main main"
    //     "sidebar content content content";
    /* "sidebar content content content"; */
    text-align: center;
    grid-gap: 5px;
`;

const ContentBox = styled.div`
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: center;
    // grid-area: content;
    justify-content: center;
    padding: 0px 16px;
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
    const [date, setDate] = useState(moment());

    const selectedDate = "TUESDAY";
    
    const LessonButton = () =>
        lessons.map((lesson) => (
            <Button name={lesson} onClick={clickLesson}>
                {lesson.name}
            </Button>
        ));
    // create lesson button

    const clickLesson = (e) => {
        // setTargetLessonData(attendance);
    };

    const onPrevMonth = () => {
        let prev = moment(date).subtract(1, "M");
        setDate(prev);
    };
    
    const onNextMonth = () => {
        let next = moment(date).add(1, "M");
        setDate(next);
    };

    const onSelectDate = (date) => {
        setDate(date);
        // setSelectedKey(null);
        console.log(date);
      };

    return (
        <Container>
            <Row>
                <Col span={5}>
                    <V2Calendar
                        date={date}
                        prevMonth={onPrevMonth}
                        nextMonth={onNextMonth}
                        onSelect={onSelectDate}
                    />
                    {LessonButton()}
                </Col>
                <Col className="attendance-content" span={19}>
                    <ContentBox>
                        <MainContentBox>
                            <AttendanceContent value={attendance.members} />
                        </MainContentBox>
                    </ContentBox>
                </Col>
            </Row>
        </Container>
    );
}
