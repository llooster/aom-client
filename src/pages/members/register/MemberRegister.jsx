import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Input, Icon, Button, Link } from "../../../components";
import {
    newName,
    newAge,
    addMember,
} from "../../../redux/reducers/membersReducer";
import { postMembersAPI } from "../../../apis/members/membersAPI";
import "../../lessons/register/LessonRegister.scss";

const MemberRegister = (props) => {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.members.newMember.name);
    const age = useSelector((state) => state.members.newMember.age);
    const newMember = useSelector((state) => state.members.newMember);

    const updateInputValue = (e) => {
        let value = e.target.value;
        switch (e.target.id) {
            case "name":
                dispatch(newName({ name: value }));
                break;
            case "age":
                dispatch(newAge({ age: value }));
                break;
        }
    };

    const renderInputs = () => {
        let inputValues = [
            {
                id: "name",
                type: "text",
                value: name,
                name: "Name",
                placehoder: "",
            },
            {
                id: "age",
                type: "number",
                value: age,
                name: "Age",
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

    const registerMember = () => {
        let member = {
            name: name,
            age: age,
        };
        console.log("member :>> ", member);
        // postMembersAPI(name, age);
        dispatch(addMember({ newMember: member }));
    };
    return (
        <Row className="LessonRegister">
            <Col span={24}>
                <Col className="header" span={24}>
                    <Link
                        to="/members"
                        type="none"
                        label={<Icon icon="back" />}
                    />
                    <span className="title">Member register</span>
                </Col>
                <Col className="body" span={24}>
                    {renderInputs()}
                </Col>
                <Col className="footer" span={24}>
                    <Button
                        className="btn-register"
                        label="REGISTER"
                        onClick={registerMember}
                    />
                </Col>
            </Col>
        </Row>
    );
};

export default MemberRegister;
