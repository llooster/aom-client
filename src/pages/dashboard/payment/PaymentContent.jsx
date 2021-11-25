import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    updatePaymentStatus,
    updateNewPayment,
} from "../../../redux/payment/paymentActions";
import { SUCCESS_UPDATE_NEW_PAYMENT } from "../../../redux/payment/paymentType";
import { Button } from "../../../components";
import _ from "lodash";
import "../attendance/Attendance.scss";
import "../content.css";
import { Row } from "antd";

const toggleToState = {
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
    const dispatch = useDispatch();
    const headerTags = () => (
        <>
            <div className="part lineUpCenter">name</div>
            {Array(12)
                .fill()
                .map((each, index) => (
                    <button
                        className="each lineUpCenter"
                        value={index}
                        onClick={updatedWeek}
                    >{`${index + 1}월`}</button>
                ))}
        </>
    );
    const updatedWeek = (e) => {
        var updatedMembers = [...members];
        const week = e.target.value;
        payment.members.forEach((member, index1) => {
            updatingPaymentAPI[
                member.payments[week].state
            ].paymentIds = updatingPaymentAPI[
                member.payments[week].state
            ].paymentIds.filter((id) => id !== member.payments[week].id);
            updatingPaymentAPI[
                toggleToState[member.payments[week].state]
            ].paymentIds.push(member.payments[week].id);
        });
        updatedMembers.forEach(
            (member) =>
                (member.payments[week].state =
                    toggleToState[member.payments[week].state])
        );
        dispatch(updatePaymentStatus({ update: updatedMembers }));
    };
    const updatedEach = (e) => {
        const member = e.target.dataset.member;
        const week = e.target.dataset.week;
        const targetPaymentId = Number(e.target.dataset.id);
        let updatedMembers = [...members];
        var targetState = updatedMembers[member].payments[week].state;
        updatingPaymentAPI[targetState].paymentIds = updatingPaymentAPI[
            targetState
        ].paymentIds.filter((item) => item !== targetPaymentId);

        updatedMembers[member].payments[week].state =
            toggleToState[updatedMembers[member].payments[week].state];
        updatingPaymentAPI[
            updatedMembers[member].payments[week].state
        ].paymentIds.push(targetPaymentId);
        dispatch(updatePaymentStatus({ update: updatedMembers }));
    };
    // console.log("CARD :>> ", updatingPaymentAPI.CARD.paymentIds);
    // console.log("CASH :>> ", updatingPaymentAPI.CASH.paymentIds);

    const content = () =>
        members &&
        members.map((member, index1) => (
            <>
                <div className="rowsWrapper">
                    <div className="part">{member.name || ""}</div>
                    {member.payments.map((payment, index2) => {
                        return (
                            <button
                                className="each lineUpCenter"
                                data-member={index1}
                                data-week={index2}
                                data-id={payment.id}
                                onClick={updatedEach}
                            >
                                {payment.state}
                            </button>
                        );
                    })}
                </div>
            </>
        ));

    // 배열의 인덱스> vs id 값?  >> 로직

    const updatePayment = () => {
        alert("UPDATE!!");
        // window.location.reload();
        dispatch(
            updateNewPayment({
                api: {
                    path: `/lessons/${selectedId}/payments`,
                    body: updatingPaymentAPI.CARD,
                },
                actions: {
                    success: SUCCESS_UPDATE_NEW_PAYMENT,
                },
            })
        );
        dispatch(
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
                <Row className="sub-header" span={6}>
                    <Button
                        className="btn-register"
                        onClick={updatePayment}
                        label="UPDATE"
                    />
                </Row>
                <div className="contentWrapper">
                    <div className="rowsWrapper">{headerTags()}</div>
                    {content()}
                </div>
            </>
        );
    };
    // 필요한 화면 render

    const renderMemberEmpty = () => {
        return <div className="danger lineUpCenter">NO MEMBERS</div>;
    };

    // no data 시 화면
    return (
        <div className="contentWrapper">
            {_.isEmpty(value) ? renderMemberEmpty() : renderTables()}
        </div>
    );
}
