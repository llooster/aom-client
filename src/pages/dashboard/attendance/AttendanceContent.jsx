import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAttStatus } from "../../../redux/attendance/attendanceActions";
import { Button } from "../../../components";
import "../content.css";
import _ from "lodash";

const updateToState = {
    UNDEFINED: "YET",
    YET: "ATT",
    ATT: "YET",
};
const YET = { state: "YET", attendanceIds: [] };
const updatingAttendanceAPI = {
    UNDEFINED: YET,
    YET: YET,
    ATT: { state: "ATT", attendanceIds: [] },
};

export default function AttendanceContent({ value, attendance }) {
    const members = useSelector((state) => state.attendance.attendance.members);
    const [getAttendance, setGetAttendance] = useState(attendance);
    const dispatch = useDispatch();
    const headerTags = () => (
        <>
            <div className="part">name</div>
            {value[0].attendances.map((each, index) => (
                <a className="part" type={index} onClick={updatedWeek}>{`${
                    index + 1
                }월`}</a>
            ))}
            <div className="part">all</div>
        </>
    );
    // 가로 이름, 세로 주차 하면 어떨지
    const updatedWeek = (e) => {
        var updatedMembers = [...members];
        const week = e.target.type;
        updatedMembers.forEach(
            (member) =>
                (member.attendances[week].state =
                    updateToState[member.attendances[week].state])
        );
        setGetAttendance(updatedMembers);
        dispatch(updateAttStatus({ update: updatedMembers }));
    };
    const updatedEach = (e) => {
        const member = e.target.dataset.member;
        const week = e.target.dataset.week;
        const targetAttendanceId = e.target.dataset.id;
        let updatedMembers = [...members];
        var targetState = updatedMembers[member].attendances[week].state;
        updatingAttendanceAPI[
            targetState
        ].attendanceIds = updatingAttendanceAPI[
            targetState
        ].attendanceIds.filter((item) => item !== targetAttendanceId);

        updatedMembers[member].attendances[week].state =
            updateToState[updatedMembers[member].attendances[week].state];
        updatingAttendanceAPI[
            updatedMembers[member].attendances[week].state
        ].attendanceIds.push(targetAttendanceId);
        console.log("YET :>> ", updatingAttendanceAPI.YET);
        console.log("ATT :>> ", updatingAttendanceAPI.ATT);
        setGetAttendance(updatedMembers);
        dispatch(updateAttStatus({ update: updatedMembers }));
    };
    const content = () =>
        members &&
        members.map((member, index1) => (
            <>
                <div className="rowsWrapper">
                    <div className="part">{member.name || ""}</div>
                    {member.attendances.map((attendance, index2) => {
                        return (
                            <a
                                className="part"
                                data-member={index1}
                                data-week={index2}
                                data-id={attendance.id}
                                onClick={updatedEach}
                            >
                                {attendance.state}
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
