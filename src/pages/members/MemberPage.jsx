import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from 'antd';
import MemberContent from "./content/MemberContent";
import {
    ModalBox,
    Input,
    Title,
    Button
} from "../../components";
import {
    newName,
    newAge,
    newId,
    addMember,
    removeMember,
} from "../../redux/reducers/membersReducer";
import "./MemberPage.scss";

let idValue = 15;

const MemberPage = () => {
    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.originMembers);
    const selectedMembers = useSelector((state) => state.members.selected);
    const newbie = useSelector((state) => state.members.newbie);
    const newbieName = useSelector((state) => state.members.newbie.name);
    const newbieAge = useSelector((state) => state.members.newbie.age);

    const remove = () => {
        let recentMember = members.filter((x) => !selectedMembers.includes(x));
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

    return  <Row className="MemberPage">
                <Col span={24}>
                    <Col className="header" span={24}>
                        <span className="title">Members</span>
                    </Col>
                    <Col className="sub-header" span={24}>
                        <Button className="btn-remove" type="danger" label="REMOVE" onClick={remove} />
                        <Button className="btn-add" label="ADD MEMBER" onClick={() => setModal(true)}/>
                    </Col>
                    <Col className="table" span={24}>
                        <MemberContent />
                    </Col>
                </Col>
                <ModalBox className="member-modal" visible={modal}>
                    <Col className="header" span={24}>
                        <Title
                            className="title"
                            fontSize="2rem"
                            text="Add Member"
                        />                        
                    </Col>
                    <Col className="body" span={24}>
                        <Input
                            type="text"
                            value={newbieName}
                            name="Name"
                            placeholder="Please input name"
                            onChange={updateName}
                        />
                        <Input
                            name="Age"
                            type="number"
                            value={newbieAge}
                            placeholder="Please input age"
                            onChange={updateAge}
                        />                        
                    </Col>
                    <Col className="footer" span={24}>
                        <Button type="danger" className="btn-modal-close" label={"CLOSE"} onClick={() => setModal(false)} />
                        <Button type="primary" className="btn-modal-add" label={"ADD"} onClick={updateMember} />
                    </Col>
                </ModalBox>   
            </Row>
}

export default MemberPage;