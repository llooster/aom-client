import React, { useEffect } from "react";
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
import { fetchLessonRequest, initForm, updateLessonName, updateLessonDay, updateLessonTime } from "../../../redux/lesson/lessonActions";
import { REQUEST_FAILURE_LESSON, REQUEST_SUCCESS_LESSON_ONE } from "../../../redux/lesson/lessonTypes";
import "./LessonOne.scss";

const LessonOne = (props) => {

    let lessonId = props.match.params.lessonId;

    const dispatch = useDispatch();

    const name = useSelector((state) => state.lessons.one.name);
    const day = useSelector((state) => state.lessons.one.day);
    const startTime = useSelector((state) => state.lessons.one.startTime);
    const endTime = useSelector((state) => state.lessons.one.endTime);

    useEffect(() => {
        dispatch(initForm());
        dispatch(
            fetchLessonRequest({
                api: {
                    path: `/lessons/${lessonId}`,
                },
                actions: {
                    success: REQUEST_SUCCESS_LESSON_ONE,
                    failure: REQUEST_FAILURE_LESSON,
                },
            })
        );
    }, [lessonId]);

    const updateInputValue = (e) => {
        let value = e.currentTarget.value;
        dispatch(updateLessonName({ name: value }));
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
        dispatch(updateLessonDay({ day: value }));
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
                <Radio value={day} buttons={buttons} onChange={onRadio} />
            </Box>
        );
    };

    const onTime = (time) => {
        let start = time[0];
        let end = time[1];
        dispatch(
            updateLessonTime({
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

    return (
        <Row className="LessonOne">
            <Col span={24}>
                <Col className="header" span={24}>
                    <Link
                        to="/lessons"
                        type="none"
                        label={<Icon icon="back" />}
                    />
                    <span className="title">{name}</span>
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
