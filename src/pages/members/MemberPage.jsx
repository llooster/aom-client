import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Button, Table, Link } from "../../components";
import "./MemberPage.scss";
import { requestMember } from "../../redux/member/memberActions";
import {
    REQUEST_SUCCESS_MEMBER,
    REQUEST_FAILURE_MEMBER,
} from "../../redux/member/memberTypes";

const memberColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
];

const MemberPage = () => {
    const members = useSelector((state) => state.members.members);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            requestMember({
                api: {
                    path: "/members",
                },
                actions: {
                    success: REQUEST_SUCCESS_MEMBER,
                    failure: REQUEST_FAILURE_MEMBER,
                },
            })
        );
    }, []);

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
