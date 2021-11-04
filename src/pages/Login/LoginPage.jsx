import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from 'antd';
import {
    VerticalWrapper,
    HorizontalWrapper,
    Title,
    Input,
    Button,
    Link
} from "../../components";
import { updateLoginId, updateLoginPassword } from "../../redux/login";
import "./LoginPage.scss";

const LoginPage = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.login.id);
    const password = useSelector((state) => state.login.password);

    const updateId = (e) => {
        dispatch(updateLoginId({ id: e.target.value }));
    };

    const updatePassword = (e) => {
        dispatch(updateLoginPassword({ password: e.target.value }));
    };

    return  <Row className="LoginPage">
                <Col className="container" xs={18} sm={12} lg={8} span={8}>
                    <Col className="title" span={24}>
                        <Title
                            className="sub-title"
                            fontSize="1rem"
                            text="Hi, Welcome Back"
                        />
                        <Title
                            className="main-title"
                            fontSize="2rem"
                            text="모두의 관리"
                        />
                    </Col>
                    <Col className="form" span={24}>
                        <span className="guide">Sign in with Your ID</span>
                        <Input
                            type="text"
                            value={id}
                            name="ID"
                            placeholder="Please input ID"
                            onChange={updateId}
                        />
                        <Input
                            type="password"
                            value={password}
                            name="PW"
                            placeholder="Please input Password"
                            onChange={updatePassword}
                        />
                        <Link
                            className="btn-login"
                            type="primary"
                            label="Login"
                            to="/dashboard"
                        />                        
                    </Col>
                    <Col className="footer" span={24}>
                        <Link
                            className="link-register"
                            type="none"
                            label="Don't have an account ?"
                            to="/register"
                        />
                    </Col>
                </Col>
            </Row>;
}

export default LoginPage;
