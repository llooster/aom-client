import React, { useState } from "react";
import { handleActions, createAction } from "redux-actions";

const CHANGE_ATT = "CHANGE_ATT";

export const changeAtt = createAction(CHANGE_ATT);

//

const initState = {
    originAttendances: {
        //key => lesson's key value, value => members
        1: [
            //lesson's key
            {
                id: 1,
                // member's key
                name: "Jon",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
        ],
        2: [
            {
                id: 2,
                name: "Cersei",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 3,
                name: "Jaime",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
        ],
        3: [
            {
                id: 4,
                name: "Arya",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 5,
                name: "Daenerys",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 6,
                name: "null",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
        ],
        4: [
            {
                id: 7,
                name: "Ferrara",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 8,
                name: "Rossini",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 9,
                name: "Harvey",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 10,
                name: "Harvey1",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
        ],
        5: [
            {
                id: 11,
                name: "Ferrara8",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 12,
                name: "Rossini8",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 13,
                name: "Harve8",
                attendance: [
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                ],
            },
            {
                id: 14,
                name: "Harvey8",
                attendance: [
                    "출석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
                    "결석",
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
