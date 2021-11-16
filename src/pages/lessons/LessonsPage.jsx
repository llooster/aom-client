import React from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link, Table } from "../../components";
import "./LessonsPage.scss";

const lessonColumns = [
    { "title": "Name",          "dataIndex": "name"         },
    { "title": "Day",           "dataIndex": "day"          },
    { "title": "Start Time",    "dataIndex": "startTime"    },
    { "title": "End Time",      "dataIndex": "endTime"      }
];

const HomePage = () => {
    
    const lessons = useSelector((state) => state.lessons.lessons);
    const dispatch = useDispatch();
    
    return (
        <Row className="LessonPage">
            <Col span={24}>
                <Col className="header" span={24}>
                    <span className="title">Lesson</span>
                </Col>
                <Col className="sub-header" span={24}>
                    <Link 
                        to="/lessons/register"
                        type="primary"
                        label="ADD"
                    />
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
