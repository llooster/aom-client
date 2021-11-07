import React, { useState } from "react";
import { handleActions, createAction } from "redux-actions";
import { useSelector } from "react-redux";

// const UPDATE_JOINID = "UPDATE_JOINID";

// export const updateJoinId = createAction(UPDATE_JOINID);

//

const initState = {
    // originAttendances:
};

const attendanceReducer = handleActions(
    {
        // [UPDATE_JOINPASSWORD]: (state, action) => ({
        //     ...state,
        //     password: action.payload.password,
        // }),
    },
    initState
);

export default attendanceReducer;
