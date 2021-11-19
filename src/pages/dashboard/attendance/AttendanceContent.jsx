import React from "react";
import { useDispatch } from "react-redux";
import { updateWeek } from "../../../redux/reducers/attendanceReducer";
import "../content.css";

const paymentRenderValue = {
    Att: "Att",
    Yet: "Yet",
};
let toggleNum = 1;
export default function AttendanceContent({ value }) {
    const dispatch = useDispatch();
    const headerTags = () =>
        value[0].attendances.map((each, index) => (
            <a class="part" type={index} onClick={updatedWeek}>{`${
                index + 1
            }주차`}</a>
        ));
    // 가로 이름, 세로 주차 하면 어떨지
    const updatedWeek = (e) => {
        var updatedValue = [...value];
        const week = e.target.type;
        // 토글 1
        updatedValue.map(
            (member) =>
                (member.attendances[week].state =
                    toggleNum % 2 == 0
                        ? paymentRenderValue.Yet
                        : paymentRenderValue.Att)
        );
        toggleNum++;

        //토글 2
        // updatedValue.map(
        //     (member) =>
        //         (member.attendances[week].state =
        //             member.attendances[0].state != paymentRenderValue.Yet
        //                 ? paymentRenderValue.Yet
        //                 : paymentRenderValue.Att)
        // );
        dispatch(updateWeek({ update: updatedValue }));
    };
    const updatedEach = (e) => {
        const member = e.target.dataset.member;
        const week = e.target.dataset.week;
        var updatedValue = [...value];
        updatedValue[member].attendances[week].state =
            updatedValue[member].attendances[week].state ==
            paymentRenderValue.Att
                ? paymentRenderValue.Yet
                : paymentRenderValue.Att;
        dispatch(updateWeek({ update: updatedValue }));
    };

    // 배열의 인덱스> vs id 값?  >> 로직
    return (
        <div class="contentWrapper">
            <div class="rowsWrapper">
                <div class="part">name</div>
                {headerTags()}
                {/* <div class="part">all</div> */}
            </div>
            {value.map((member, index1) => (
                <div class="rowsWrapper">
                    <div class="part">{member.name || ""}</div>
                    {member.attendances.map((attendance, index2) => {
                        return (
                            <a
                                class="part"
                                data-member={index1}
                                data-week={index2}
                                onClick={updatedEach}
                            >
                                {attendance.state}
                            </a>
                        );
                    })}
                    {/* <a class="part">{"all"}</a> */}
                </div>
            ))}
        </div>
    );
}
