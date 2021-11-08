import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import { selectAll } from "../../../redux/reducers/attendanceReducer";
import "../content.css";

export default function AMainContent({ value }) {
    const dispatch = useDispatch();

    //value -> clicked lesson's data {key, name, members}
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

    const listTags = () =>
        Object.keys(membersAttendance[0]).map((each, index) => (
            <div class="part">{1}</div>
        ));
    // const listTags = Object.keys(membersAttendance).map((each, index) => (
    //     <div class="part">{1}</div>
    // ));
    return (
        <div class="contentWrapper">
            <div class="rowsWrapper">
                <div class="part">name</div>
                {headerTags()}
                <div class="part">all</div>
            </div>
            <div class="rowsWrapper">
                <div class="part">name</div>
                {/* {listTags()} */}
                <div class="part">all</div>
            </div>
        </div>
    );
}
