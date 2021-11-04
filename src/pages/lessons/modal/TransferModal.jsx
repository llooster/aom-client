import React from "react";
import { Col } from "antd";
import { ModalBox, Title, Button } from "../../../components";
import Member from "../member/Member.jsx";

const TransferModal = (props) => {

    const { isOpened, members, closeModal } = props;

    return  <ModalBox
                className="transfer-modal"
                visible={isOpened}
            >
                <Col className="header" span={24}>
                    <Title
                        className="title"
                        text="Member"
                        fontSize="2rem"
                    />
                </Col>
                <Col className="body" span={24}>
                    <Member name={members}></Member>
                </Col>
                <Col className="footer" span={24}>
                    <Button type="danger" className="btn-modal-close" label="CLOSE" onClick={closeModal} />
                </Col>
            </ModalBox>
}

export default TransferModal;