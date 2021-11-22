import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link, Table } from "../../components";
import { fetchRequest } from "../../redux/lesson/lessonActions";
import { 
    REQUEST_SUCCESS_LESSON, 
    REQUEST_FAILURE_LESSON 
} from "../../redux/lesson/lessonTypes";
import "./LessonsPage.scss";

const lessonColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Day", dataIndex: "day" },
    { title: "Start Time", dataIndex: "startTime" },
    { title: "End Time", dataIndex: "endTime" },
];

const HomePage = () => {

    const lessons = useSelector((state) => state.lessons.lessons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchRequest({ 
                api: {
                    path: "/lessons", 
                    params: {
                        key: "value"
                    }
                },
                actions: {
                    success: REQUEST_SUCCESS_LESSON,
                    failure: REQUEST_FAILURE_LESSON
                }
            })
        );
    }, []);

    // console.log(
    //     " 1. member 추가 화면 그리기 2. get/lessons, get/members getlessonsbyId,getmebersbyId, postlesson, postMember 3. saga 적용"
    // );
    return (
        <Row className="LessonPage">
            <Col span={24}>
                <Col className="header" span={24}>
                    <span className="title">Lesson</span>
                </Col>
                <Col className="sub-header" span={24}>
                    <Link to="/lessons/register" type="primary" label="ADD" />
                </Col>
                <Col className="body" span={24}>
                    <Table
                        columns={lessonColumns}
                        dataSource={lessons}
                        moveTo={"/lessons"}
                    />
                </Col>
            </Col>
        </Row>
    );
};

export default HomePage;
