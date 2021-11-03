import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Table, Radio, Divider } from "antd";
import {
    selectLessons,
    removeLessons,
    newName,
    newTime,
    newAddress,
    addLesson,
} from "../../../redux/reducers/lessonsReducer";
import { ModalBox, Input, Title } from "../../../components";

const Button = styled.button`
    width: 100px;
    height: 30px;
`;

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Time",
        dataIndex: "time",
    },
    {
        title: "Address",
        dataIndex: "address",
    },
];

let keyValue = 5;
export default function MainContent(props) {
    const dispatch = useDispatch();
    const lessons = useSelector((state) => state.lessons.originLessons);
    const selectedLessons = useSelector((state) => state.lessons.selected);
    const newLesson = useSelector((state) => state.lessons.newLesson);
    const name = useSelector((state) => state.lessons.newLesson.name);
    const time = useSelector((state) => state.lessons.newLesson.time);
    const address = useSelector((state) => state.lessons.newLesson.address);

    const [selectionType, setSelectionType] = useState("checkbox");
    const [modal, setModal] = useState(false);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            dispatch(selectLessons({ selectedLessons: selectedRows }));
        },
        getCheckboxProps: (record) => ({
            name: record.name,
        }),
    };

    const remove = () => {
        let updatedLessons = lessons.filter(
            (item) => !selectedLessons.includes(item)
        );
        // console.log("updatedLessons :>> ", updatedLessons);
        dispatch(removeLessons({ updatedLessons: updatedLessons }));
    };
    const openModal = () => {
        setModal(true);
    };
    const add = () => {
        dispatch(addLesson({ newLesson: newLesson }));
        setModal(false);
    };

    const updateName = (e) => {
        dispatch(newName({ name: e.target.value }));
    };
    const updateTime = (e) => {
        dispatch(newTime({ time: e.target.value }));
    };
    const updateAddress = (e) => {
        dispatch(newAddress({ address: e.target.value }));
    };
    const clickLesson = (e) => {
        console.log("e :>> ", e.target);
    };
    // console.log("newLesson :>> ", newLesson);
    return (
        <>
            <div>
                <ModalBox width="200px" height="auto" visible={modal}>
                    <Title
                        width="auto"
                        height="40px"
                        text="New Member"
                        fontSize="20px"
                    ></Title>
                    <Button onClick={add}>add</Button>
                    <Input
                        onChange={updateName}
                        type="text"
                        value={name}
                        name="Class Name"
                        placeholder="name"
                    />
                    <Input
                        onChange={updateTime}
                        type="text"
                        value={time}
                        name="Time"
                        placeholder="time"
                    />
                    <Input
                        onChange={updateAddress}
                        type="text"
                        value={address}
                        name="Address"
                        placeholder="Address"
                    />
                </ModalBox>
                <Radio.Group
                    onChange={({ target: { value } }) => {
                        setSelectionType(value);
                    }}
                    value={selectionType}
                />

                <Divider>
                    <Button onClick={openModal}>add</Button>
                    <Button onClick={remove}>remove</Button>
                </Divider>

                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={lessons}
                    onClick={clickLesson}
                />
            </div>
        </>
    );
}
