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
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "firstName",
        headerName: "First name",
        width: 150,
        editable: true,
    },
    {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        editable: true,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 80,
        editable: true,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, "firstName") || ""} ${
                params.getValue(params.id, "lastName") || ""
            }`,
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
    const checkedMember = useSelector((state) => state.members.selected);

    const checking = (e) => {
        console.log("e :>> ", e);
        dispatch(getMember({ checkedMember: e }));
    };
    const getId = (ids) => {
        // ids == 선택된 id의 배열
        // ex) 2, 4, 5 선택 -> ids == [2, 4, 5]
        let selectedMembers = ids.map((id) => members[id - 1]);
        checking(selectedMembers);
    };
    console.log("checkedMember :>> ", checkedMember);
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
