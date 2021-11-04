import { handleActions, createAction } from "redux-actions";

const UPDATE_JOINID = "UPDATE_JOINID";
const UPDATE_JOINPASSWORD = "UPDATE_JOINPASSWORD";

export const updateJoinId = createAction(UPDATE_JOINID);
export const updateJoinPassword = createAction(UPDATE_JOINPASSWORD);
//

const initState = {
    id: null,
    password: null,
};

const joinReducer = handleActions(
    {
        [UPDATE_JOINID]: (state, action) => ({
            ...state,
            id: action.payload.id,
        }),
        [UPDATE_JOINPASSWORD]: (state, action) => ({
            ...state,
            password: action.payload.password,
        }),
    },
    initState
);

export default joinReducer;
