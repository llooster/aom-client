import React from "react";
import { useDispatch } from "react-redux";
import { updatePayment } from "../../../redux/reducers/paymentReducer";

const paymentRenderValue = {
    Paid: "Paid",
    Yet: "Yet",
};

const updateToState = {
    Y: "CARD",
    UNDEFINED: "CARD",
    CARD: "CASH",
    CASH: "CARD",
};

let toggleNum = 1;
export default function PaymentContent({ value }) {
    const dispatch = useDispatch();
    const headerTags = () =>
        value[0].payments.map((each, index) => (
            <a class="part" type={index} onClick={updatedWeek}>{`${
                index + 1
            }월`}</a>
        ));
    // 가로 이름, 세로 주차 하면 어떨지
    const updatedWeek = (e) => {
        var updatedValue = [...value];
        const week = e.target.type;
        // 토글 1
        // updatedValue.map(
        //     (member) =>
        //         (member.payments[week].state =
        //             toggleNum % 2 === 0
        //                 ? paymentRenderValue.Yet
        //                 : paymentRenderValue.Paid)
        // );
        // toggleNum++;

        // 토글 2
        updatedValue.forEach(
            (member) =>
                (member.payments[week].state =
                    updateToState[member.payments[week].state])
        );

        dispatch(updatePayment({ update: updatedValue }));
    };
    const updatedEach = (e) => {
        const member = e.target.dataset.member;
        const week = e.target.dataset.week;
        var updatedValue = [...value];
        updatedValue[member].payments[week].state =
            updatedValue[member].payments[week].state ===
            paymentRenderValue.Paid
                ? paymentRenderValue.Yet
                : paymentRenderValue.Paid;
        dispatch(updatePayment({ update: updatedValue }));
    };

    // 배열의 인덱스> vs id 값?  >> 로직
    return (
        <div class="contentWrapper">
            <div class="rowsWrapper">
                <div class="part">name</div>
                {headerTags()}
                <div class="part">all</div>
            </div>
            {value.map((member, index1) => (
                <div class="rowsWrapper">
                    <div class="part">{member.name || ""}</div>
                    {member.payments.map((payment, index2) => {
                        return (
                            <a
                                class="part"
                                data-member={index1}
                                data-week={index2}
                                onClick={updatedEach}
                            >
                                {payment.state}
                            </a>
                        );
                    })}
                    <a class="part">{"all"}</a>
                </div>
            ))}
        </div>
    );
}
