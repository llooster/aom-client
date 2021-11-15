import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import { changeAtt } from "../../../redux/reducers/attendanceReducer";

const paymentRenderValue = {
    결석: "카드",
    출석: "현금",
    yet: "미정",
};

export default function AMainContent({ value }) {
    const dispatch = useDispatch();
    // value -> clicked lesson's data {key, name, members}
    const originAttendance = useSelector(
        (state) => state.attendance.originAttendances
    );
    const key = value.key;
    const membersAttendance = originAttendance[key];
    //레슨들

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
                    onClick={clickAtt}
                >
                    {membersAttendance[index1].attendance[index2] || ""}
                </a>
            ));
    const clickAtt = (e) => {
        let newOriginAttendance = { ...originAttendance };
        // let updatedAtt =
        //     originAttendance[key][e.target.id].attendance[
        //         e.target.dataset.month
        //     ] == "결석"
        //         ? "출석"
        //         : "결석";
        let status =
            originAttendance[key][e.target.id].attendance[
                e.target.dataset.month
            ];
        let updatedAtt = paymentRenderValue[status];

        // toggle 방식
        newOriginAttendance[key][e.target.id].attendance[
            e.target.dataset.month
        ] = updatedAtt;
        dispatch(changeAtt({ updatedAttendances: newOriginAttendance }));
    };
    const clickAll = (e) => {
        let newOriginAttendance = { ...originAttendance };
        let updatedAtt =
            originAttendance[key][e.target.dataset.member].attendance[0] ==
            "출석"
                ? Array(12)
                      .fill()
                      .map((each, index) => "결석")
                : Array(12)
                      .fill()
                      .map((each, index) => "출석");
        newOriginAttendance[key][
            e.target.dataset.member
        ].attendance = updatedAtt;
        dispatch(changeAtt({ updatedAttendances: newOriginAttendance }));
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
