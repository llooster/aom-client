import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    updateAttStatus,
    updateNewAttendance,
} from "../../../redux/attendance/attendanceActions";
import { SUCCESS_UPDATE_NEW_ATTENDANCE } from "../../../redux/attendance/attendanceType";
import { Button } from "../../../components";
import _ from "lodash";
import "../content.css";
import "./Attendance.scss";
import { Row } from "antd";

const toggleToState = {
    UNDEFINED: "ABSENT",
    ABSENT: "ATTENDANCE",
    ATTENDANCE: "ABSENT",
};
const ABSENT = { state: "ABSENT", attendanceIds: [] };
const updatingAttendanceAPI = {
    UNDEFINED: ABSENT,
    ABSENT: ABSENT,
    ATTENDANCE: { state: "ATTENDANCE", attendanceIds: [] },
};

export default function AttendanceContent({ value, attendance }) {
    const members = useSelector((state) => state.attendance.attendance.members);
    const selectedId = useSelector((state) => state.attendance.selected);
    const dispatch = useDispatch();
    const headerTags = () => (
        <>
            <div className="part lineUpCenter">name</div>
            {value[0].attendances.map((each, index) => (
                <button
                    className="part lineUpCenter"
                    value={index}
                    onClick={updatedWeek}
                >{`${index + 1}월`}</button>
            ))}
        </>
    );
    // 가로 이름, 세로 주차 하면 어떨지
    const updatedWeek = (e) => {
        var updatedMembers = [...members];
        const week = e.target.value;
        attendance.members.forEach((member, index1) => {
            updatingAttendanceAPI[
                member.attendances[week].state
            ].attendanceIds = updatingAttendanceAPI[
                member.attendances[week].state
            ].attendanceIds.filter((id) => id !== member.attendances[week].id);
            updatingAttendanceAPI[
                toggleToState[member.attendances[week].state]
            ].attendanceIds.push(member.attendances[week].id);
        });
        updatedMembers.forEach(
            (member) =>
                (member.attendances[week].state =
                    toggleToState[member.attendances[week].state])
        );
        dispatch(updateAttStatus({ update: updatedMembers }));
    };
    const updatedEach = (e) => {
        // console.log("e.target :>> ", e.target);
        const member = e.target.dataset.member;
        const week = Number(e.target.dataset.week);
        const targetAttendanceId = Number(e.target.dataset.id);
        let updatedMembers = [...members];
        var targetState = updatedMembers[member].attendances[week].state;
        updatingAttendanceAPI[
            targetState
        ].attendanceIds = updatingAttendanceAPI[
            targetState
        ].attendanceIds.filter((item) => item !== targetAttendanceId);

        updatedMembers[member].attendances[week].state =
            toggleToState[updatedMembers[member].attendances[week].state];
        updatingAttendanceAPI[
            updatedMembers[member].attendances[week].state
        ].attendanceIds.push(targetAttendanceId);
        dispatch(updateAttStatus({ update: updatedMembers }));
    };
    console.log("ABSENT :>> ", updatingAttendanceAPI.ABSENT.attendanceIds);
    console.log(
        "ATTENDANCE :>> ",
        updatingAttendanceAPI.ATTENDANCE.attendanceIds
    );

    const content = () =>
        members &&
        members.map((member, index1) => (
            <>
                <div className="rowsWrapper">
                    <div className="part lineUpCenter">{member.name || ""}</div>
                    {member.attendances.map((attendance, index2) => {
                        return (
                            <button
                                className="each lineUpCenter"
                                data-member={index1}
                                data-week={index2}
                                data-id={attendance.id}
                                // value={dict}
                                onClick={updatedEach}
                            >
                                {attendance.state}
                            </button>
                        );
                    })}
                    {/* <a className="part">{"all"}</a> */}
                </div>
            </>
        ));

    // 배열의 인덱스> vs id 값?  >> 로직

    const updateAttendance = () => {
        alert("UPDATE!!");
        // window.location.reload();
        dispatch(
            updateNewAttendance({
                api: {
                    path: `/lessons/${selectedId}/attendances`,
                    body: updatingAttendanceAPI.ABSENT,
                },
                actions: {
                    success: SUCCESS_UPDATE_NEW_ATTENDANCE,
                },
            })
        );
        dispatch(
            updateNewAttendance({
                api: {
                    path: `/lessons/${selectedId}/attendances`,
                    body: updatingAttendanceAPI.ATTENDANCE,
                },
                actions: {
                    success: SUCCESS_UPDATE_NEW_ATTENDANCE,
                },
            })
        );
    };
    const renderTables = () => {
        return (
            <>
                <Row className="sub-header" span={6}>
                    <Button
                        className="btn"
                        type="primary"
                        onClick={updateAttendance}
                        label="REGISTER"
                    />
                </Row>
                <div className="contentWrapper">
                    <div className="rowsWrapper">{headerTags()}</div>
                    {content()}
                </div>
            </>
        );
    };

    const renderEmpty = () => {
        return <div>NO MEMBERS</div>;
    };

    // // 배열의 인덱스> vs id 값?  >> 로직
    return (
        <div className="contentWrapper">
            {_.isEmpty(value) ? renderEmpty() : renderTables()}
        </div>
    );
}
