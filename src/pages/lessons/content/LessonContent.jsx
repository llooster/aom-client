import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import { selectLessons } from "../../../redux/reducers/lessonsReducer";
import TransferModal from "../modal/TransferModal";

export default function LessonContent(props) {
    const [isTransferOpened, setTransfer] = useState(false);
    const [selectionType, setSelectionType] = useState("checkbox");
    const [includedMembers, setIncludedMembers] = useState("");
    const [selectedLessonName, setSelectedLessonName] = useState("");

    const dispatch = useDispatch();

    //레슨들
    const lessons = useSelector((state) => state.lessons.originLessons);

    // const students = lessons.map((lesson) => ({
    //     key: lesson.key,
    //     members: lesson.members,
    // }));

    // const members = lessons.map((lesson) => lesson.members);

    const clickLesson = (e) => {
        setTransfer(true);
        setSelectedLessonName(e.target.name);
    };

    const closeTransfer = () => {
        setTransfer(false);
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text) => (
                <a name={text} onClick={clickLesson}>
                    {text}
                </a>
            ),
        },
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "Time",
            dataIndex: "time",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
        {
            title: "Students",
            dataIndex: "members",
            render: (text) => {
                setIncludedMembers(text);
                return <a>{`${text.length}`}</a>;
            },
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            dispatch(selectLessons({ selectedLessons: selectedRows }));
        },
        getCheckboxProps: (record) => ({
            name: record.name,
        }),
    };

    return (
        <>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={lessons}
                // onClick={clickLesson}
            />
            <TransferModal
                isOpened={isTransferOpened}
                members={includedMembers}
                closeModal={closeTransfer}
            />
        </>
    );
}
