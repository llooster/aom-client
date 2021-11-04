import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Table, Radio, Divider } from "antd";
import lessonsReducer, {
    selectLessons,
    removeLessons,
    newName,
    newDate,
    newTime,
    newAddress,
    addLesson,
    cancelModal,
} from "../../../redux/reducers/lessonsReducer";
import { ModalBox, Input, Title } from "../../../components";
import Member from "./member";

const Button = styled.button`
    width: 100px;
    height: 30px;
`;

let keyValue = 5;
export default function MainContent(props) {
    const [memberView, setMemberView] = useState(false);
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text) => (
                <a>
                    {text}
                    <ModalBox
                        // onClick={closeModal}
                        width="400px"
                        height="auto"
                        visible={memberView}
                    >
                        <Title
                            width="100%"
                            height="30px"
                            text="Member"
                            fontSize="20px"
                        />
                        <Member></Member>
                    </ModalBox>
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
            dataIndex: ["members"].length,
        },
    ];
    const dispatch = useDispatch();
    const lessons = useSelector((state) => state.lessons.originLessons);
    //레슨들
    const selectedLessons = useSelector((state) => state.lessons.selected);
    // 체크박스 선택된 레슨들
    const name = useSelector((state) => state.lessons.newLesson.name);
    const date = useSelector((state) => state.lessons.newLesson.date);
    const time = useSelector((state) => state.lessons.newLesson.time);
    const address = useSelector((state) => state.lessons.newLesson.address);
    // 새로 입력하는 레슨의 데이터
    let newLesson = useSelector((state) => state.lessons.newLesson);
    // 새로 입력한 레슨
    const students = lessons.map((lesson) => ({
        key: lesson.key,
        members: lesson.members,
        number: lesson.members.length,
    }));
    console.log(`students`, students);
    const [selectionType, setSelectionType] = useState("checkbox");
    const [modal, setModal] = useState(false);

    const members = lessons.map((lesson) => lesson.members);

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
        dispatch(removeLessons({ updatedLessons: updatedLessons }));
    };
    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
        dispatch(cancelModal());
    };

    const add = () => {
        newLesson = {
            key: keyValue++,
            ...newLesson,
        };
        dispatch(addLesson({ newLesson: newLesson }));
        closeModal();
    };

    const clickLesson = (e) => {
        console.log("e :>> ", e.target);
    };

    const updateInputValue = (e) => {
        let id = e.currentTarget.id;
        let value = e.currentTarget.value;
        let func = {
            name: newName,
            date: newDate,
            time: newTime,
            address: newAddress,
        };
        dispatch(
            func[id]({
                [`${id}`]: value,
            })
        );
    };
    // console.log("members :>> ", members);

    const renderInputs = () => {
        let inputValues = [
            {
                id: "name",
                type: "text",
                value: name,
                name: "Class Name",
                placehoder: "name",
            },
            {
                id: "date",
                type: "text",
                value: date,
                name: "Lesson Date",
                placehoder: "date",
            },
            {
                id: "time",
                type: "text",
                value: time,
                name: "Lesson Time",
                placehoder: "time",
            },
            {
                id: "address",
                type: "text",
                value: address,
                name: "Lesson Address",
                placehoder: "address",
            },
        ];

        return inputValues.map((input, index) => {
            return (
                <Input
                    key={index}
                    id={input.id}
                    type={input.type}
                    value={input.value}
                    name={input.name}
                    placeholder={input.placehoder}
                    onChange={updateInputValue}
                />
            );
        });
    };
    // console.log("newLesson :>> ", newLesson);
    return (
        <>
            <div>
                <ModalBox
                    onClick={closeModal}
                    width="200px"
                    height="auto"
                    visible={modal}
                >
                    <Title
                        width="auto"
                        height="40px"
                        text="New Member"
                        fontSize="20px"
                    ></Title>
                    <Button onClick={add}>add</Button>
                    {renderInputs()}
                </ModalBox>
                <Radio.Group
                    onChange={({ target: { value } }) => {
                        setSelectionType(value);
                    }}
                    value={selectionType}
                />

                <Divider>
                    <span>Lesson</span>
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
