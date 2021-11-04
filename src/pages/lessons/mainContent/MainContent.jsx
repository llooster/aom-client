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
    newMember,
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
    let [includedMembers, setIncludedMembers] = useState("");
    const [selectedLessonName, setSelectedLessonName] = useState("");
    const clickLesson = (e) => {
        setMemberView(true);
        setSelectedLessonName(e.target.name);
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text) => (
                <a name={text} onClick={clickLesson}>
                    {text}
                    <ModalBox
                        // onClick={closeModal}
                        width="400px"
                        height="500px"
                        visible={memberView}
                    >
                        <Title
                            width="100%"
                            height="30px"
                            text="Member"
                            fontSize="20px"
                        />
                        <Member name={includedMembers}></Member>
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
            dataIndex: "members",
            render: (text) => {
                setIncludedMembers(text);
                return <a>{`${text.length}`}</a>;
            },
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
    // 레슨의 key, members 객체
    const [selectionType, setSelectionType] = useState("checkbox");
    const [modal, setModal] = useState(false);
    const students = lessons.map((lesson) => ({
        key: lesson.key,
        members: lesson.members,
    }));
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
    const add = () => {
        newLesson = {
            key: keyValue++,
            ...newLesson,
            members: [],
        };
        dispatch(addLesson({ newLesson: newLesson }));
        closeModal();
    };

    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
        dispatch(cancelModal());
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

        return inputValues.map((input, index) => (
            <Input
                key={index}
                id={input.id}
                type={input.type}
                value={input.value}
                name={input.name}
                placeholder={input.placehoder}
                onChange={updateInputValue}
            />
        ));
    };
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
                    // onClick={clickLesson}
                />
            </div>
        </>
    );
}
