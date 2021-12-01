import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Input, Icon, Button, Link } from "../../../components";
import "../../lessons/register/LessonRegister.scss";

import { postMembersAPI } from "../../../apis/members/membersAPI";
import {
    updateNewMemberName,
    updateNewMemberAge,
    addMember,
} from "../../../redux/member/memberActions";

const MemberRegister = (props) => {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.members.newMember.name);
    const age = useSelector((state) => state.members.newMember.age);
    const newMember = useSelector((state) => state.members.newMember);

    const updateInputValue = (e) => {
        let value = e.target.value;
        switch (e.target.id) {
            case "name":
                dispatch(updateNewMemberName({ name: value }));
                break;
            case "age":
                dispatch(updateNewMemberAge({ age: value }));
                break;
            default:
                return;
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
        postMembersAPI(name, age);
        dispatch(addMember());
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
                    <span className="title"> Member register</span>
                </Col>
                <Col className="body" span={24}>
                    {renderInputs()}
                </Col>
                <Col className="footer" span={24}>
                    <Button
                        to="/members"
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
