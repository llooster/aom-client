import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Input, Icon, Button, Transfer, Link } from "../../../components";
import { addLesson, newName, newDate, newTime, newAddress } from "../../../redux/reducers/lessonsReducer";
import "./LessonRegister.scss";

let keyValue = 5;

const LessonRegister = (props) => {

    const dispatch = useDispatch();
    
    const name = useSelector((state) => state.lessons.newLesson.name);
    const date = useSelector((state) => state.lessons.newLesson.date);
    const time = useSelector((state) => state.lessons.newLesson.time);
    const address = useSelector((state) => state.lessons.newLesson.address);
    const newLesson = useSelector((state) => state.lessons.newLesson);

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
                placehoder: "Please input name",
            },
            {
                id: "date",
                type: "text",
                value: date,
                name: "Lesson Date",
                placehoder: "Please input date",
            },
            {
                id: "time",
                type: "text",
                value: time,
                name: "Lesson Time",
                placehoder: "Please input time",
            },
            {
                id: "address",
                type: "text",
                value: address,
                name: "Lesson Address",
                placehoder: "Please input address",
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

    const renderTransfer = () => {
        return <Transfer />
    }

    return  <Row className="LessonRegister">
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
                        { renderInputs() }
                        { renderTransfer() }
                    </Col>
                    <Col className="footer" span={24}>
                        <Button label="REGISTER"/>
                    </Col>
                </Col>
            </Row>
}

export default LessonRegister;