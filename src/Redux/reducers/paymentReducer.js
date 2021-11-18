import { handleActions, createAction } from "redux-actions";

const UPDATE_PAYMENT = "UPDATE_PAYMENT";

export const updatePayment = createAction(UPDATE_PAYMENT);

const initState = {
    payment: {
        date: "2021-11-15",
        year: 2021,
        month: 11,
        members: [
            {
                id: 1,
                name: "Lee",
                payments: [
                    {
                        id: 1,
                        date: "2021-01-28",
                        state: "Y",
                    },
                    {
                        id: 2,
                        date: "2021-02-28",
                        state: "Y",
                    },
                    {
                        id: 3,
                        date: "2021-03-28",
                        state: "Y",
                    },
                    {
                        id: 4,
                        date: "2021-04-28",
                        state: "Y",
                    },
                    {
                        id: 5,
                        date: "2021-05-28",
                        state: "Y",
                    },
                    {
                        id: 6,
                        date: "2021-06-28",
                        state: "Y",
                    },
                    {
                        id: 7,
                        date: "2021-07-28",
                        state: "Y",
                    },
                    {
                        id: 8,
                        date: "2021-08-28",
                        state: "Y",
                    },
                    {
                        id: 9,
                        date: "2021-09-28",
                        state: "Y",
                    },
                    {
                        id: 10,
                        date: "2021-10-28",
                        state: "Y",
                    },
                    {
                        id: 11,
                        date: "2021-11-28",
                        state: "Y",
                    },
                    {
                        id: 12,
                        date: "2021-12-28",
                        state: "Y",
                    },
                ],
            },
            {
                id: 2,
                name: "Hangyeol",
                payments: [
                    {
                        id: 13,
                        date: "2021-01-28",
                        state: "Y",
                    },
                    {
                        id: 14,
                        date: "2021-02-28",
                        state: "Y",
                    },
                    {
                        id: 15,
                        date: "2021-03-28",
                        state: "Y",
                    },
                    {
                        id: 16,
                        date: "2021-04-28",
                        state: "Y",
                    },
                    {
                        id: 17,
                        date: "2021-05-28",
                        state: "Y",
                    },
                    {
                        id: 18,
                        date: "2021-06-28",
                        state: "Y",
                    },
                    {
                        id: 19,
                        date: "2021-07-28",
                        state: "Y",
                    },
                    {
                        id: 20,
                        date: "2021-08-28",
                        state: "Y",
                    },
                    {
                        id: 21,
                        date: "2021-09-28",
                        state: "Y",
                    },
                    {
                        id: 22,
                        date: "2021-10-28",
                        state: "Y",
                    },
                    {
                        id: 23,
                        date: "2021-11-28",
                        state: "Y",
                    },
                    {
                        id: 24,
                        date: "2021-12-28",
                        state: "Y",
                    },
                ],
            },
        ],
    },
    selected: [],
};

const paymentReducer = handleActions(
    {
        [UPDATE_PAYMENT]: (state, action) => ({
            ...state,
            payment: {
                ...state.payment,
                members: action.payload.update,
            },
        }),
    },
    initState
);

export default paymentReducer;
