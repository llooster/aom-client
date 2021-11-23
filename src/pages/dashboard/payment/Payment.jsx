import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Calendar } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import PaymentContent from "./PaymentContent";

import { reauestPayment } from "../../../redux/payment/paymentActions";
import {
    REQUEST_SUCCESS_TODAY_LESSON,
    REQUEST_SUCCESS_TODAY_PAYMENT,
} from "../../../redux/payment/paymentType";

const Container = styled.div`
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
    text-align: center;
    grid-gap: 5px;
`;

const Main = styled.main`
    border-radius: 20px;
    color: white;
    height: 100%;
    grid-area: main;
    padding: 0.25rem;
`;
const SideBar = styled.div`
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

export default function Payment() {
    const dispatch = useDispatch();
    const year = new Date().getFullYear();
    const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
    const day = ("0" + new Date().getDate()).slice(-2);
    const [today, setToday] = useState(year + "-" + month + "-" + day);
    useEffect(() => {
        dispatch(
            reauestPayment({
                api: {
                    path: `/lessons?date=${today}`,
                },
                actions: {
                    success: REQUEST_SUCCESS_TODAY_LESSON,
                },
            })
        );
    }, []);

    const lessons = useSelector((state) => state.payment.lessons);
    const selectedLessonId = console.log("lessons :>> ", lessons);

    const LessonButton = () =>
        lessons.map((lesson) => (
            <Button id={lesson.id} onClick={clickLesson}>
                {lesson.name}
            </Button>
        ));
    // create lesson button
    const payment = useSelector((state) => state.payment.payment);

    const clickLesson = (e) => {
        // setSelectedLessonId(e.target.id);
        dispatch(
            reauestPayment({
                api: {
                    path: `/lessons/${e.target.id}/payments?date=${today}`,
                },
                actions: {
                    success: REQUEST_SUCCESS_TODAY_PAYMENT,
                },
            })
        );
    };
    return (
        <Container>
            <Main>
                <Link to="/attendance">{"Attendance"}</Link>
            </Main>
            <SideBar>
                <Calendar></Calendar>
                {LessonButton()}
            </SideBar>
            <ContentBox>
                <MainContentBox>
                    <PaymentContent payment={payment} value={payment.members} />
                </MainContentBox>
            </ContentBox>
        </Container>
    );
}
