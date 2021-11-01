import React from "react";
import VerticalWrapper from "../../components/wrapper/vertical";
import HorizontalWrapper from "../../components/wrapper/horizontal";
import Title from "../../components/title";
import InputBox from "../../components/input";
import ButtonBox from "../../components/button";

function LoginPage() {
    return (
        <VerticalWrapper width="100%" height="100vh" backColor="#eeeeee">
            <VerticalWrapper
                width="400px"
                height="350px"
                justifyContent="space-around"
            >
                <Title text="모두의 관리" />
                <VerticalWrapper
                    width="100%"
                    height="150px"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <InputBox type="text" name="ID" placeholder="ID 입력" />
                    <InputBox
                        type="password"
                        name="PW"
                        placeholder="password 입력"
                    />
                </VerticalWrapper>
                <HorizontalWrapper>
                    <ButtonBox text="Login" type="" />
                    <ButtonBox text="Join" type="/join" />
                </HorizontalWrapper>
            </VerticalWrapper>
        </VerticalWrapper>
    );
}

export default LoginPage;
