import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Button } from "../../../components";
import { updatePaymentStatus, updateNewPayment, } from "../../../redux/payment/paymentActions";
import { SUCCESS_UPDATE_NEW_PAYMENT } from "../../../redux/payment/paymentType";
import _ from "lodash";
import "../content.css";

const colors = {
    CARD: "#8db3f0",
    CASH: "#8d1fff",
    UNDEFINED: "#fa7583"
}

const labels = [
    { label: "카드", color: colors.CARD },
    { label: "현금", color: colors.CASH },
    { label: "미납", color: colors.UNDEFINED },
];

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
            <div className="part">이름</div>
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
                                style={{background: colors[payment.state]}}
                            />
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

    const renderLabels = () => {

        return labels.map((item) => {
            return <div className="label-item">
                <div className="color" style={{background: item.color}}>
                </div>
                <div className="label">
                    {item.label}
                </div>
            </div>
        })
    }

    const renderTables = () => {
        return <Row>
                <Col className="content-header" span={24}>
                    <div className="label-box">
                        { renderLabels() }
                    </div>
                    <div className="button-box">
                        <Button
                            className="btn-update"
                            onClick={updatePayment}
                            label="UPDATE"
                        />
                    </div>
                </Col>
                <Col className="contentWrapper">
                    <div className="rowsWrapper">{headerTags()}</div>
                    {content()}
                </Col>
            </Row>
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
