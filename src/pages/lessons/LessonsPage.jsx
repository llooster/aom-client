import React, { useState } from "react";
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { Button, Link } from "../../components";
import { removeLessons } from "../../redux/reducers/lessonsReducer";
import LessonContent from "./content/LessonContent";
import "./LessonPage.scss";

const HomePage = () => {

    const lessons = useSelector((state) => state.lessons.originLessons);
    const selectedLessons = useSelector((state) => state.lessons.selected);

    const dispatch = useDispatch();

    const remove = () => {
        let updatedLessons = lessons.filter(
            (item) => !selectedLessons.includes(item)
        );
        dispatch(removeLessons({ updatedLessons: updatedLessons }));
    };

    return  <Row className="LessonPage">
                <Col span={24}>
                    <Col className="header" span={24}>
                        <span className="title">Lesson</span>
                    </Col>
                    <Col className="sub-header" span={24}>
                        <Button className="btn-remove" type="danger" label="REMOVE" onClick={remove} />
                        <Link to="/lessons/register">ADD</Link>
                    </Col>
                    <Col className="table" span={24}>
                        <LessonContent />
                    </Col>
                </Col>
            </Row>
}

export default HomePage;
