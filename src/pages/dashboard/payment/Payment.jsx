import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Box, V2Calendar } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import PaymentContent from "./PaymentContent";
import styled from "styled-components";
import moment from "moment";

import {
    fetchDayLessonRequest,
    fetchLessonPaymentRequest,
    selectLesson,
    updateDate,
} from "../../../redux/payment/paymentActions";
import {
    REQUEST_FAILURE,
    REQUEST_LESSON_PAYMENT_SUCCESS,
    REQUEST_SUCCESS_DAY_LESSON,
} from "../../../redux/payment/paymentType";
import "../attendance/Attendance.scss";

const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    color: white;
    min-width: 1000px;
    text-align: center;
    grid-gap: 5px;
`;

const ContentBox = styled.div`
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: center;
    justify-content: center;
    padding: 0px 16px;
`;
const MainContentBox = styled.div`
    padding: 0.25rem;
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export default function Payment() {
    const dispatch = useDispatch();
    const date = useSelector((state) => state.payment.date);
    const strDate = useSelector((state) => state.payment.strDate);
    const lessons = useSelector((state) => state.payment.lessons);
    const selected = useSelector((state) => state.payment.selected);
    const payment = useSelector((state) => state.payment.payment);
    console.log(`lessons`, lessons[0]);
    useEffect(() => {
        dispatch(
            fetchDayLessonRequest({
                api: {
                    path: "/lessons",
                    params: {
                        date: strDate,
                    },
                },
                actions: {
                    success: REQUEST_SUCCESS_DAY_LESSON,
                    failure: REQUEST_FAILURE,
                },
            })
        );
    }, [date]);

    const LessonButtonRender = () => (
        <Box>
            {lessons &&
                lessons.map((lesson) => (
                    <Button
                        key={lesson.id}
                        className={lesson.id === selected ? "selected" : ""}
                        id={lesson.id}
                        onClick={clickLesson}
                    >
                        {lesson.name}
                    </Button>
                ))}
        </Box>
    );
    // create lessons button

    const clickLesson = (e) => {
        let lessonId = e.target.id;
        dispatch(
            selectLesson({
                id: lessonId,
            })
        );
        dispatch(
            fetchLessonPaymentRequest({
                api: {
                    path: `/lessons/${lessonId}/payments`,
                    params: {
                        date: strDate,
                    },
                },
                actions: {
                    success: REQUEST_LESSON_PAYMENT_SUCCESS,
                    failure: REQUEST_FAILURE,
                },
            })
        );
    };

    const onPrevMonth = () => {
        let prev = moment(date).subtract(1, "M");
        dispatch(updateDate(prev));
    };

    const onNextMonth = () => {
        let next = moment(date).add(1, "M");
        dispatch(updateDate(next));
    };

    const onSelectDate = (date) => {
        dispatch(updateDate(date));
    };
    const renderLessonEmpty = () => {
        return <div className="each">NO LESSONS</div>;
    };
    return (
        <Container>
            <Row className="Attendance">
                <Col span={5}>
                    <V2Calendar
                        date={date}
                        prevMonth={onPrevMonth}
                        nextMonth={onNextMonth}
                        onSelect={onSelectDate}
                    />
                    {lessons[0] === undefined
                        ? renderLessonEmpty()
                        : LessonButtonRender()}
                </Col>
                <Col className="attendance-content" span={19}>
                    <ContentBox>
                        <MainContentBox>
                            <PaymentContent
                                value={payment.members}
                                payment={payment}
                            />
                        </MainContentBox>
                    </ContentBox>
                </Col>
            </Row>
        </Container>
    );
}
