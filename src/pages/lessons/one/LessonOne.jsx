import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Input, Icon, Button, Transfer, Link } from "../../../components";
import { newName, newDate, newTime } from "../../../redux/reducers/lessonsReducer";
import "./LessonOne.scss";

const LessonOne = (props) => {

    const dispatch = useDispatch();
    
    const lessonOne = useSelector((state) => state.lessons.one);
    const name      = lessonOne.name;
    const day       = lessonOne.day;
    const startTime = lessonOne.startTime;
    const endTime   = lessonOne.endTime;

    const updateInputValue = (e) => {
        let id = e.currentTarget.id;
        let value = e.currentTarget.value;
        let func = {
            name: newName,
            date: newDate,
            time: newTime,
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
                placehoder: "Please input name",
            },
            {
                id: "date",
                type: "text",
                value: day,
                name: "Lesson Date",
                placehoder: "Please input date",
            },
            {
                id: "time",
                type: "text",
                value: startTime,
                name: "Lesson Time",
                placehoder: "Please input time",
            }
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

    const renderTransfer = () => {
        return <Transfer />
    }

    return  <Row className="LessonOne">
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
                        { renderInputs() }
                        { renderTransfer() }
                    </Col>
                    <Col className="footer" span={24}>
                        <Button className="btn-delete" type="danger" label="DELETE" />
                        <Button label="UPDATE"/>
                    </Col>
                </Col>
            </Row>
}

export default LessonOne;