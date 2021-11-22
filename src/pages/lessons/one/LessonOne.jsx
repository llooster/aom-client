import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import {
    Input,
    Icon,
    Button,
    Transfer,
    Link,
    Radio,
    RangePicker,
    Box,
} from "../../../components";
import {
    newName,
    newDate,
    newTime,
} from "../../../redux/reducers/lessonsReducer";
import {
    deleteLessonAPI,
    getLessonsIdAPI,
} from "../../../apis/lessons/lessonAPI";
import "./LessonOne.scss";

const LessonOne = (props) => {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.lessons.selected.name);
    const date = useSelector((state) => state.lessons.selected.day);
    const startTime = useSelector((state) => state.lessons.selected.startTime);
    const endTime = useSelector((state) => state.lessons.selected.endTime);

    const updateInputValue = (e) => {
        let value = e.currentTarget.value;
        dispatch(newName({ name: value }));
    };

    const renderInputs = () => {
        let inputValues = [
            {
                id: "name",
                type: "text",
                value: name,
                name: "Class",
                placehoder: "",
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

    const onRadio = (e) => {
        let value = e.target.value;
        dispatch(newDate({ date: value }));
    };

    const renderRadio = () => {
        const buttons = [
            { value: "MONDAY", label: "MON" },
            { value: "TUESDAY", label: "TUE" },
            { value: "WEDNESDAY", label: "WED" },
            { value: "THURSDAY", label: "THR" },
            { value: "FRIDAY", label: "FRI" },
            { value: "SATURDAY", label: "SAT" },
            { value: "SUNDAY", label: "SUN" },
        ];
        return (
            <Box label="Day of week">
                <Radio value={date} buttons={buttons} onChange={onRadio} />
            </Box>
        );
    };

    const onTime = (time) => {
        let start = time[0];
        let end = time[1];
        dispatch(
            newTime({
                startTime: start,
                endTime: end,
            })
        );
    };

    const renderTimePicker = () => {
        return (
            <Box label="Start & End Time">
                <RangePicker value={[startTime, endTime]} onChange={onTime} />
            </Box>
        );
    };

    const renderTransfer = () => {
        return (
            <Box label="Add Members">
                <Transfer />
            </Box>
        );
    };
    const deleteLesson = () => {};
    getLessonsIdAPI();
    return (
        <Row className="LessonOne">
            <Col span={24}>
                <Col className="header" span={24}>
                    <Link
                        to="/lessons"
                        type="none"
                        label={<Icon icon="back" />}
                    />
                    <span className="title">Lesson Register</span>
                </Col>
                <Col className="body" span={24}>
                    {renderInputs()}
                    {renderRadio()}
                    {renderTimePicker()}
                    {renderTransfer()}
                </Col>
                <Col className="footer" span={24}>
                    <Button
                        className="btn-delete"
                        type="danger"
                        label="DELETE"
                        // to = "/lessons"해야해서 Link로 바꾸는게 어떤지
                        onClick={deleteLesson}
                    />
                    <Button label="UPDATE" />
                </Col>
            </Col>
        </Row>
    );
};

export default LessonOne;
