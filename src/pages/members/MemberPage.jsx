import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { ModalBox, Input, Title, Button, Table } from "../../components";
import {
    newName,
    newAge,
    newId,
    addMember,
    removeMember,
} from "../../redux/reducers/membersReducer";
import "./MemberPage.scss";

let idValue = 15;

const memberColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
];

const MemberPage = () => {
    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.members);
    const selectedMembers = useSelector((state) => state.members.selected);
    const newbie = useSelector((state) => state.members.newbie);
    const newbieName = useSelector((state) => state.members.newbie.name);
    const newbieAge = useSelector((state) => state.members.newbie.age);

    const remove = () => {
        let recentMember = members.filter((x) => !selectedMembers.includes(x));
        // console.log("recentMember :>> ", recentMember);
        dispatch(removeMember({ updateMembers: recentMember }));
    };

    const updateName = (e) => {
        dispatch(newId({ id: ++idValue }));
        dispatch(newName({ firstName: e.target.value }));
    };

    const updateAge = (e) => {
        dispatch(newAge({ age: e.target.value }));
    };

    const updateMember = () => {
        dispatch(addMember({ newMember: newbie }));
        setModal(false);
    };

    const [modal, setModal] = useState(false);

    return (
        <Row className="MemberPage">
            <Col span={24}>
                <Col className="header" span={24}>
                    <span className="title">Members</span>
                </Col>
                <Col className="sub-header" span={24}>
                    <Button
                        className="btn-remove"
                        type="danger"
                        label="REMOVE"
                        onClick={remove}
                    />
                    <Button
                        className="btn-add"
                        label="ADD MEMBER"
                        onClick={() => setModal(true)}
                    />
                </Col>
                <Col className="table" span={24}>
                    <Table
                        columns={memberColumns}
                        dataSource={members}
                        moveTo={"/members"}
                    />
                    {/* <MemberContent /> */}
                </Col>
            </Col>
        </Row>
    );
};

export default MemberPage;
