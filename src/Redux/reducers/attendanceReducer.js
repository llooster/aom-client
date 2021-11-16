import React, { useState } from "react";
import { handleActions, createAction } from "redux-actions";

const CHANGE_ATT = "CHANGE_ATT";

export const changeAtt = createAction(CHANGE_ATT);

// 이름 key값도 필요할 것 같음
// 하루에 여러 레슨이 있을 수 있으니 lessons은 배열이면 좋을 것 같음
const initState = {
    attendance: {
        date: "2021-11-15",
        year: 2021,
        month: 11,
        members: [
            {
                id: 1,
                name: "Hangyeol",
                attendances: [
                    {
                        id: 6,
                        date: "2021-11-01",
                        state: "UNDEFINED",
                    },
                    {
                        id: 7,
                        date: "2021-11-08",
                        state: "UNDEFINED",
                    },
                    {
                        id: 8,
                        date: "2021-11-15",
                        state: "UNDEFINED",
                    },
                    {
                        id: 9,
                        date: "2021-11-22",
                        state: "UNDEFINED",
                    },
                    {
                        id: 10,
                        date: "2021-11-29",
                        state: "UNDEFINED",
                    },
                ],
            },
            {
                id: 2,
                name: "Hangyeol",
                attendances: [
                    {
                        id: 6,
                        date: "2021-11-01",
                        state: "UNDEFINED",
                    },
                    {
                        id: 7,
                        date: "2021-11-08",
                        state: "UNDEFINED",
                    },
                    {
                        id: 8,
                        date: "2021-11-15",
                        state: "UNDEFINED",
                    },
                    {
                        id: 9,
                        date: "2021-11-22",
                        state: "UNDEFINED",
                    },
                    {
                        id: 10,
                        date: "2021-11-29",
                        state: "UNDEFINED",
                    },
                ],
            },
        ],
    },
    selected: [],
};

const attendanceReducer = handleActions(
    {
        [CHANGE_ATT]: (state, action) => ({
            ...state,
            originAttendances: action.payload.updatedAttendances,
            // [action.payload.dummy...]: action.payload.updatedAttendances,
        }),
    },
    initState
);

export default attendanceReducer;
