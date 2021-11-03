import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    VerticalWrapper,
    HorizontalWrapper,
    Title,
    Input,
    Button,
} from "../../components";
import { updateLoginId, updateLoginPassword } from "../../redux/login";

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

    return (
        <VerticalWrapper
            width="400px"
            height="350px"
            padding="10px"
            justifyContent="space-around"
        >
            <Title
                width="100%"
                height="100px"
                fontSize="80px"
                text="모두의 관리"
            />
            <VerticalWrapper
                width="100%"
                height="120px"
                justifyContent="space-around"
                alignItems="flex-start"
            >
                <Input
                    onChange={updateId}
                    type="text"
                    value={id}
                    name="ID"
                    placeholder="ID 입력"
                />
                <Input
                    onChange={updatePassword}
                    type="password"
                    value={password}
                    name="PW"
                    placeholder="password 입력"
                />
            </VerticalWrapper>
            <HorizontalWrapper width="100%" justifyContent="space-between">
                <Button
                    text="Login"
                    to="/dashboard"
                    width="185px"
                    height="35px"
                    fontSize="15px"
                />
                <Button
                    text="Register"
                    to="/register"
                    width="185px"
                    height="35px"
                    fontSize="15px"
                />
            </HorizontalWrapper>
        </VerticalWrapper>
    );
}

export default LoginPage;
