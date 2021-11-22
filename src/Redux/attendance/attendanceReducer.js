import { handleActions } from "redux-actions";
import { UPDATE_ATT_STATUS } from "./attendanceType";

const initState = {
    attendance: {
        date: "2021-11-15",
        year: 2021,
        month: 11,
        members: [
            {
                id: 1,
                name: "Lee",
                attendances: [
                    {
                        id: 1,
                        date: "2021-11-01",
                        state: "UNDEFINED",
                    },
                    {
                        id: 2,
                        date: "2021-11-08",
                        state: "Att",
                    },
                    {
                        id: 3,
                        date: "2021-11-15",
                        state: "UNDEFINED",
                    },
                    {
                        id: 4,
                        date: "2021-11-22",
                        state: "UNDEFINED",
                    },
                    {
                        id: 5,
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
        [UPDATE_ATT_STATUS]: (state, action) => ({
            ...state,
            attendance: {
                ...state.attendance,
                members: action.payload.update,
            },
        }),
    },
    initState
);

export default attendanceReducer;
