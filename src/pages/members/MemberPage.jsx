import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Button, Table, Link } from "../../components";
// import { removeMember } from "../../redux/reducers/membersReducer";
import "./MemberPage.scss";

const memberColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
];

const MemberPage = () => {
    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.members);
    const selectedMembers = useSelector((state) => state.members.selected);

    // const remove = () => {
    //     let recentMember = members.filter((x) => !selectedMembers.includes(x));
    //     console.log("recentMember :>> ", recentMember);
    //     dispatch(removeMember({ updateMembers: recentMember }));
    // };

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
                        // onClick={remove}
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
