import React from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Button, Link, Table } from "../../components";
import { removeLessons } from "../../redux/reducers/lessonsReducer";
import "./LessonPage.scss";

const lessonColumns = [
    { "title": "Name",          "dataIndex": "name"         },
    { "title": "Day",           "dataIndex": "day"          },
    { "title": "Start Time",    "dataIndex": "startTime"    },
    { "title": "End Time",      "dataIndex": "endTime"      }
];

const HomePage = () => {
    const lessons = useSelector((state) => state.lessons.lessons);
    const selectedLessons = useSelector((state) => state.lessons.selected);

    const dispatch = useDispatch();

    const remove = () => {
        let updatedLessons = lessons.filter(
            (item) => !selectedLessons.includes(item)
        );
        dispatch(removeLessons({ updatedLessons: updatedLessons }));
    };

    return (
        <Row className="LessonPage">
            <Col span={24}>
                <Col className="header" span={24}>
                    <span className="title">Lesson</span>
                </Col>
                <Col className="sub-header" span={24}>
                    <Link to="/lessons/register">ADD</Link>
                </Col>
                <Col className="body" span={24}>
                    <Table 
                        columns={lessonColumns}
                        dataSource={lessons}
                    />
                </Col>
            </Col>
        </Row>
    );
};

export default HomePage;
