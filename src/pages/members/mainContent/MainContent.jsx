import React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
    getMember,
    addMember,
    removeMember,
} from "../../../redux/reducers/membersReducer";

const columns = [
    {
        field: "name",
        headerName: "Name",
        description: "This column has a value getter and is not sortable.",
        width: 160,
        valueGetter: (params) => params.row.name,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 80,
        editable: true,
    },
    {
        field: "class",
        headerName: "Lessons",
        type: "number",
        width: 200,
        valueGetter: (params) => params.row.lessons,
    },
    {
        field: "memo",
        headerName: "Memo",
        width: 250,
        editable: true,
    },
];

export default function MainContent(props) {
    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.originMembers);
    const selectedMembers = useSelector((state) => state.members.selected);
    const newMember = useSelector((state) => state.members.newMember);

    const checking = (e) => {
        dispatch(getMember({ selectedMembers: e }));
    };
    const getId = (ids) => {
        let recentMember = ids.map((id) => members[id - 1]);
        checking(recentMember);
    };
    // console.log("columns :>> ", columns[0].valueGetter);

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
                rows={members}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                onSelectionModelChange={getId}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
