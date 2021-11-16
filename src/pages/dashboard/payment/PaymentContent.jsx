import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePayment } from "../../../redux/reducers/paymentReducer";
import "../content.css";

export default function PaymentContent({ value }) {
    const dispatch = useDispatch();
    // value -> clicked payment's data {key, name, members}
    const originPayments = useSelector((state) => state.payment.originPayments);
    const key = value.key;
    const membersPayment = originPayments[key];

    const headerTags = () =>
        Array(12)
            .fill()
            .map((each, index) => <div class="part">{`${index + 1}월`}</div>);

    const listTags = (index1, id) =>
        Array(12)
            .fill()
            .map((each, index2) => (
                <a
                    class="part"
                    id={index1}
                    data-month={index2}
                    onClick={clickPayment}
                >
                    {membersPayment[index1].payment[index2] || ""}
                </a>
            ));
    const clickPayment = (e) => {
        let newOriginPayment = { ...originPayments };
        let updatedAtt =
            originPayments[key][e.target.id].payment[e.target.dataset.month] ==
            "payed"
                ? "yet"
                : "payed";
        // toggle 방식
        newOriginPayment[key][e.target.id].payment[
            e.target.dataset.month
        ] = updatedAtt;
        dispatch(changePayment({ updatedPayments: newOriginPayment }));
    };
    const clickAll = (e) => {
        let newOriginPayment = { ...originPayments };
        let updatedAtt =
            originPayments[key][e.target.dataset.member].payment[0] == "yet"
                ? Array(12)
                      .fill()
                      .map((each, index) => "payed")
                : Array(12)
                      .fill()
                      .map((each, index) => "yet");
        newOriginPayment[key][e.target.dataset.member].payment = updatedAtt;
        dispatch(changePayment({ updatedPayments: newOriginPayment }));
    };
    return (
        <div class="contentWrapper">
            <div class="rowsWrapper">
                <div class="part">name</div>
                {headerTags()}
                <div class="part">all</div>
            </div>
            {(value.members || []).map((member, index) => (
                <div class="rowsWrapper">
                    <div class="part">{member.name}</div>
                    {listTags(index, member.id)}
                    <a class="part" data-member={index} onClick={clickAll}>
                        {"all"}
                    </a>
                </div>
            ))}
        </div>
    );
}
