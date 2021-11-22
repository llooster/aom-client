import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Button, Table, Link } from "../../components";
// import { removeMember } from "../../redux/reducers/membersReducer";
import "./MemberPage.scss";
import { getMembersAPI } from "../../APIs/members/membersAPI";
import updateMembersAPI from "../../redux/reducers/membersReducer";
import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";
const memberColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
];

const MemberPage = () => {
    const members = useSelector((state) => state.members.members);
    const dispatch = useDispatch();
    // useEffect(() => {
    getMembersAPI();
    // });
    // dispatch(updateMembersAPI({ members: members }));
    console.log("members :>> ", members);
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
                    />
                    <Link
                        to="/members/register"
                        type="primary"
                        label="ADD MEMBER"
                    />
                </Col>
                <Col className="table" span={24}>
                    <Table
                        columns={memberColumns}
                        dataSource={members}
                        moveTo={"/members"}
                    />
                </Col>
            </Col>
        </Row>
    );
};

export default MemberPage;
