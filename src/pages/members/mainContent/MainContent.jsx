import React from "react";
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
        valueGetter: (params) => params.row.name,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        editable: true,
    },
    {
        field: "class",
        headerName: "Lessons",
        type: "number",
        valueGetter: (params) => params.row.lessons,
    },
    {
        field: "memo",
        headerName: "Memo",
        width: 500,
        editable: true,
    }
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

    return  <DataGrid
                rows={members}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                onSelectionModelChange={getId}
                checkboxSelection
                disableSelectionOnClick
            />
}
