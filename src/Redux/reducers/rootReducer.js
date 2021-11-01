import { handleActions } from "redux-actions";

const initialState = {
    // counter: 1,
    // name: "Ur name",
    input: {
        ID: "",
        PW: "",
    },
};
const rootReducer = handleActions(
    {
        ["input"]: (state, action) => ({
            ...state,
            counter: state.counter + 1,
        }),
        ["DECREMENT"]: (state, action) => ({
            ...state,
            counter: state.counter - 1,
        }),
    },
    initialState
);
//store.js

// function rootReducer(state = initialState, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return { ...state, counter: state.counter + 1 };
//         case "DECREMENT":
//             return { ...state, counter: state.counter - 1 };
//         case "FirstName":
//             return { ...state, name: "Hangyeol" };
//         case "LastName":
//             return { ...state, name: "Lee" };
//         default:
//             return state;
//     }
// }
// const rootReducer = handleActions(
//     {
//         ["INCREMENT"]: (state, action) => ({
//             ...state,
//             counter: state.counter + 1,
//         }),
//         ["DECREMENT"]: (state, action) => ({
//             ...state,
//             counter: state.counter - 1,
//         }),
//     },
//     initialState
// );

// reducer

// const reducer = handleActions({ [CHANGE_USER]: (state, action) => ({...state, user: action.user}) });

//action

export default rootReducer;
