import React from "react";
import VerticalWrapper from "../../components/wrapper/vertical";
import HorizontalWrapper from "../../components/wrapper/horizontal";
import Title from "../../components/title";
import InputBox from "../../components/input";
import ButtonBox from "../../components/button";
import { useSelector, useDispatch } from "react-redux";

function LoginPage() {
    const dispatch = useDispatch();
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
                        type="text"
                        name="ID"
                        placeholder="ID 입력"
                        onChange={() => dispatch({ type: "input" })}
                    />
                    <InputBox
                        type="password"
                        name="PW"
                        placeholder="password 입력"
                    />
                </VerticalWrapper>
                <HorizontalWrapper width="100%" justifyContent="space-between">
                    <ButtonBox
                        text="Login"
                        type=""
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
