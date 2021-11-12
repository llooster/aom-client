import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import {
    selectAll,
    changeAtt,
} from "../../../redux/reducers/attendanceReducer";
import "../content.css";

export default function AMainContent({ value }) {
    const dispatch = useDispatch();
    // value -> clicked lesson's data {key, name, members}
    console.log("value :>> ", value);
    const originAttendance = useSelector(
        (state) => state.attendance.originAttendances
    );
    const key = value.key;
    const membersAttendance = originAttendance[key];
    console.log("membersAttendance :>> ", membersAttendance);
    const [selectionType, setSelectionType] = useState("checkbox");

    const lessons = useSelector((state) => state.lessons.originLessons);
    //레슨들

    const headerTags = () =>
        Array(12)
            .fill()
            .map((each, index) => <div class="part">{`${index + 1}월`}</div>);

    const listTags = (index1, id) =>
        // 0,1,2,3
        Array(12)
            .fill()
            .map((each, index2) => (
                <a
                    class="part"
                    id={id}
                    data-month={index2 + 1}
                    onClick={clickAtt}
                >
                    {membersAttendance[index1][index2 + 1]}
                </a>
            ));
    const clickAtt = (e) => {
        console.log("lessonId :>> ", value.key);
        console.log("memberId :>> ", e.target.id); //id 값
        console.log("what's month :>> ", e.target.dataset.month); //몇월인지
        dispatch(
            changeAtt({
                lessonId: value.key,
                // 레슨id
                memberId: e.target.id,
                // member id
                month: e.target.dataset.month,
                // 몇월인지
                text: "출석",
                // "출석"으로 value 값 변경
            })
        );
    };
    console.log(" reducer에서 변경하는 것(action) 부터 ");
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
                    <a class="part">{"all"}</a>
                </div>
            ))}
        </div>
    );
}
