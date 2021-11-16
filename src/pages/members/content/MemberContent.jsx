import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { getMember } from "../../../redux/reducers/membersReducer";

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
    // {
    //     field: "lesson",
    //     headerName: "Lessons",
    //     type: "number",
    //     valueGetter: (params) => params.row.lessons,
    // },
    {
        field: "memo",
        headerName: "Memo",
        width: 500,
        editable: true,
    },
];

export default function MemberContent(props) {
    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.members);

    const checking = (e) => {
        dispatch(getMember({ selectedMembers: e }));
    };
    const getId = (ids) => {
        let recentMember = ids.map((id) => members[id - 1]);
        console.log("recentMember :>> ", recentMember);
        // checking(recentMember);
        // 하나의 member객체를 전부 지우는지 아니면 Id값을 받아서 해당 id의 member를 지우도록 하는지
    };
    // console.log("columns :>> ", columns[0].valueGetter);

    return (
        <DataGrid
            rows={members}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            onSelectionModelChange={getId}
            checkboxSelection
            disableSelectionOnClick
        />
    );
}
