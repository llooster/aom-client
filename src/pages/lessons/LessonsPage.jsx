import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { Link, Table } from "../../components";
import "./LessonsPage.scss";
import { getLessonsAPI, postLessonsAPI } from "../../APIs/lessons/lessonAPI";

const lessonColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Day", dataIndex: "day" },
    { title: "Start Time", dataIndex: "startTime" },
    { title: "End Time", dataIndex: "endTime" },
];
const HomePage = () => {
    const lessons = useSelector((state) => state.lessons.lessons);
    console.log(
        " 1. member 추가 화면 그리기 2. get/lessons, get/members getlessonsbyId,getmebersbyId, postlesson, postMember 3. saga 적용"
    );
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
