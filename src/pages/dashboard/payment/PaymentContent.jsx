import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    updatePaymentStatus,
    updateNewPayment,
} from "../../../redux/payment/paymentActions";
import { SUCCESS_UPDATE_NEW_PAYMENT } from "../../../redux/payment/paymentType";
import { Button } from "../../../components";
import _ from "lodash";
import axios from "axios";

const updateToState = {
    UNDEFINED: "CARD",
    CARD: "CASH",
    CASH: "CARD",
};
const CARD = { state: "CARD", paymentIds: [] };
const updatingPaymentAPI = {
    UNDEFINED: CARD,
    CARD: CARD,
    CASH: { state: "CASH", paymentIds: [] },
};

export default function PaymentContent({ value, payment }) {
    const members = useSelector((state) => state.payment.payment.members);
    const selectedId = useSelector((state) => state.payment.selected);
    console.log(">>> 주 클릭 시 PUT /API <<< ");
    // let cards = [];
    // let cashs = [];
    // payment.members &&
    //     payment.members.forEach((member, index) => {
    //         // console.log("member :>> ", member.payments);
    //         var newcards = member.payments.filter(
    //             (item) => item.state === "CARD"
    //         );
    //         var newcashs = member.payments.filter(
    //             (item) => item.state === "CARD"
    //         );
    //         cards = newcards.map((item) => item.id);
    //         cashs = newcards.map((item) => item.id);
    // });
    // console.log("cards :>> ", cards);
    // console.log("cashs :>> ", cashs);
    const dispatch = useDispatch();
    const headerTags = () => (
        <>
            <div className="part">name</div>
            {Array(12)
                .fill()
                .map((each, index) => (
                    <a className="part" type={index} onClick={updatedWeek}>{`${
                        index + 1
                    }월`}</a>
                ))}
            <div className="part">all</div>
        </>
    );
    const updatedWeek = (e) => {
        var updatedMembers = [...members];
        const week = e.target.type;
        updatedMembers.forEach(
            (member) =>
                (member.payments[week].state =
                    updateToState[member.payments[week].state])
        );

        //updatingPaymentAPI 여기부터
        dispatch(updatePaymentStatus({ update: updatedMembers }));
    };
    const updatedEach = (e) => {
        const member = e.target.dataset.member;
        const week = e.target.dataset.week;
        const targetPaymentId = e.target.dataset.id;
        let updatedMembers = [...members];
        var targetState = updatedMembers[member].payments[week].state;
        updatingPaymentAPI[targetState].paymentIds = updatingPaymentAPI[
            targetState
        ].paymentIds.filter((item) => item !== targetPaymentId);

        updatedMembers[member].payments[week].state =
            updateToState[updatedMembers[member].payments[week].state];
        updatingPaymentAPI[
            updatedMembers[member].payments[week].state
        ].paymentIds.push(targetPaymentId);
        console.log("CARD :>> ", updatingPaymentAPI.CARD);
        console.log("CASH :>> ", updatingPaymentAPI.CASH);
        dispatch(updatePaymentStatus({ update: updatedMembers }));
    };
    const content = () =>
        members &&
        members.map((member, index1) => (
            <>
                <div className="rowsWrapper">
                    <div className="part">{member.name || ""}</div>
                    {member.payments.map((payment, index2) => {
                        return (
                            <a
                                className="part"
                                data-member={index1}
                                data-week={index2}
                                data-id={payment.id}
                                onClick={updatedEach}
                            >
                                {payment.state}
                            </a>
                        );
                    })}
                    <a className="part">{"all"}</a>
                </div>
            </>
        ));

    // 배열의 인덱스> vs id 값?  >> 로직
    const updatePayment = () => {
        dispatch(
            updateNewPayment({
                api: {
                    path: `/lessons/${selectedId}/payments`,
                    body: updatingPaymentAPI.CARD,
                },
                actions: {
                    success: SUCCESS_UPDATE_NEW_PAYMENT,
                },
            }),
            updateNewPayment({
                api: {
                    path: `/lessons/${selectedId}/payments`,
                    body: updatingPaymentAPI.CASH,
                },
                actions: {
                    success: SUCCESS_UPDATE_NEW_PAYMENT,
                },
            })
        );
    };
    const renderTables = () => {
        return (
            <>
                <Button
                    className="btn-register"
                    onClick={updatePayment}
                    label="UPDATE"
                />
                <div className="contentWrapper">
                    <div className="rowsWrapper">{headerTags()}</div>
                    {content()}
                </div>
            </>
        );
    };
    // 필요한 화면 render
    const renderEmpty = () => {
        return <div>NO MEMBERS</div>;
    };
    // no data 시 화면
    return (
        <div className="contentWrapper">
            {_.isEmpty(value) ? renderEmpty() : renderTables()}
        </div>
    );
}
