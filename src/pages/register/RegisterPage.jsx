import React from "react";
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import {
    Title,
    Input,
    Button,
} from "../../components";
import {
    updateJoinId,
    updateJoinPassword,
} from "../../redux/reducers/joinReducer";
import "./RegisterPage.scss";

const RegisterPage = (props) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.join.id);
    const password = useSelector((state) => state.join.password);

    console.log("Id :>> ", id);
    console.log("password :>> ", password);

    const updateId = (e) => {
        dispatch(updateJoinId({ id: e.target.value }));
    };
    const updatePassword = (e) => {
        dispatch(updateJoinPassword({ password: e.target.value }));
    };

    return  <Row className="RegisterPage">
                <Col className="container" xs={18} sm={12} lg={8} span={8}>
                    <Col className="title" span={24}>
                        <Title
                            className="sub-title"
                            fontSize="1rem"
                            text="Sign up"
                        />                  
                        <Title
                            className="main-title"
                            fontSize="2rem"
                            text="모두의 관리"
                        />                           
                    </Col>
                    <Col className="form" span={24}>
                        <span className="guide">Sign up with ...</span>
                        <Input
                            type="text"
                            name="ID"
                            placeholder="ID 입력"
                            onChange={updateId}
                        />
                        <Input
                            type="password"
                            name="PW"
                            placeholder="password 입력"
                            onChange={updatePassword}
                        />
                        <Button
                            className="btn-register"
                            text="Register"
                            type="/login"
                        />                    
                    </Col>
                    <Col className="footer" span={24}>
                        <Button
                            className="btn-back"
                            text="Already have an account?"
                            to="/login"
                        />                    
                    </Col>                               
                </Col>
            </Row>
}

export default RegisterPage;
