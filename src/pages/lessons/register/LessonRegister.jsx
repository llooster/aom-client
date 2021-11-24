import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import {
    Input,
    Icon,
    Button,
    Link,
    Radio,
    RangePicker,
    Box,
} from "../../../components";
import {
    initForm,
    postLesson,
    updateLessonName,
    updateLessonDay,
    updateLessonTime,
    fetchNonMembersRequest,
    addMemberToLesson
} from "../../../redux/lesson/lessonActions";
import { 
    REQUEST_FAILURE_LESSON, 
    REQUEST_NON_MEMBER_SUCCESS, 
    REQUEST_SUCCESS_POST_LESSON 
} from "../../../redux/lesson/lessonTypes";
import "./LessonRegister.scss";

const LessonRegister = (props) => {

    const dispatch = useDispatch();

    const name = useSelector((state) => state.lessons.one.name);
    const day = useSelector((state) => state.lessons.one.day);
    const startTime = useSelector((state) => state.lessons.one.startTime);
    const endTime = useSelector((state) => state.lessons.one.endTime);
    const nonMembers = useSelector((state) => state.lessons.one.nonMembers);
    const addMemberIds = useSelector((state) => state.lessons.one.addMemberIds);

    useEffect(() => {
        dispatch(initForm());
        dispatch(
            fetchNonMembersRequest({
                api: {
                    path: "/members/none"
                },
                actions: {
                    success: REQUEST_NON_MEMBER_SUCCESS,
                    failure: REQUEST_FAILURE_LESSON
                }
            })
        )      
    }, []);

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

    const btnMemberClicked = (e) => {
        dispatch(addMemberToLesson(Number(e.currentTarget.id)));
    }

    const nonMemberLabel = (member) => {
        return <Button 
                key={member.id}
                id={member.id}
                type="gray"
                className={["btn-member", addMemberIds.includes(member.id) ? "selected": ""].join(" ")}
                onClick={btnMemberClicked}
                label={`${member.name}(${member.age})`}
            />
    }

    const renderNonMembers = () => {
        return (
            <Box className="non-members" label="Add Members">
                {nonMembers.map((member) => {
                    return nonMemberLabel(member);
                })}
            </Box>
        );
    };

    const registerLesson = () => {
        let body = {
            name: name,
            day: day,
            startTime: startTime,
            endTime: endTime,
        };

        dispatch(
            postLesson({
                api: {
                    path: "/lessons",
                    body: body
                },
                actions: {
                    success: REQUEST_SUCCESS_POST_LESSON,
                    failure: REQUEST_FAILURE_LESSON,
                },
            })
        );
    };

    return (
        <Row className="LessonRegister">
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
                    {renderNonMembers()}
                </Col>
                <Col className="footer" span={24}>
                    <Button
                        className="btn-register"
                        label="REGISTER"
                        onClick={registerLesson}
                    />
                </Col>
            </Col>
        </Row>
    );
};

export default LessonRegister;
