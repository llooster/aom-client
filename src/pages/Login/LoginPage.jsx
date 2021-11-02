import React from "react";
import VerticalWrapper from "../../components/wrapper/vertical";
import HorizontalWrapper from "../../components/wrapper/horizontal";
import Title from "../../components/title";
import InputBox from "../../components/input";
import ButtonBox from "../../components/button";
import { useSelector, useDispatch } from "react-redux";
import {
    updateLoginId,
    updateLoginPassword,
} from "../../Redux/reducers/loginReducer";

function LoginPage() {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.login.id);
    const password = useSelector((state) => state.login.password);

    console.log("Id : ", id);
    console.log("pw : ", password);

    const updateId = (e) => {
        dispatch(updateLoginId({ id: e.target.value }));
    };

    const updatePassword = (e) => {
        dispatch(updateLoginPassword({ password: e.target.value }));
    };

    return (
        <VerticalWrapper width="100%" height="100vh" backColor="">
            <VerticalWrapper
                width="400px"
                height="350px"
                padding="10px"
                justifyContent="space-around"
            >
                <Title text="모두의 관리" />
                <VerticalWrapper
                    width="100%"
                    height="120px"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <InputBox
                        onChange={updateId}
                        type="text"
                        value={id}
                        name="ID"
                        placeholder="ID 입력"
                    />
                    <InputBox
                        onChange={updatePassword}
                        type="password"
                        value={password}
                        name="PW"
                        placeholder="password 입력"
                    />
                </VerticalWrapper>
                <HorizontalWrapper width="100%" justifyContent="space-between">
                    <ButtonBox
                        text="Login"
                        // type=""
                        width="185px"
                        height="35px"
                        fontSize="15px"
                    />
                    <ButtonBox
                        text="Join"
                        type="/join"
                        width="185px"
                        height="35px"
                        fontSize="15px"
                    />
                </HorizontalWrapper>
            </VerticalWrapper>
        </VerticalWrapper>
    );
}

export default LoginPage;
