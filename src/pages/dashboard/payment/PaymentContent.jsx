import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePaymentStatus } from "../../../redux/payment/paymentActions";
import { Button } from "../../../components";
import _ from "lodash";

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
    const [getPayment, setGetPayment] = useState(payment);
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
        setGetPayment(updatedMembers);
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
        setGetPayment(updatedMembers);
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
    const renderTables = () => {
        return (
            <>
                <Button className="btn-register" label="REGISTER" />
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
