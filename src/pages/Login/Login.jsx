import React, { useState } from "react";
// import styled from "styled-components";
import {
    HomeWrapper,
    HomeBox,
    HomeTitle,
    HomeInputWrapper,
    HomeButtonWrapper,
    HomeText,
} from "../../components/Home/Home";
import InputBox from "../../components/Input";
import ButtonBox from "../../components/Button";

function Login() {
    let join = useState("/join")[0];
    return (
        <>
            <HomeWrapper>
                <HomeBox>
                    <HomeTitle>모두의 관리</HomeTitle>
                    <HomeInputWrapper>
                        <HomeText>{"ID"}</HomeText>
                        <InputBox type="text"></InputBox>
                        <HomeText>{"PW"}</HomeText>
                        <InputBox type="password"></InputBox>
                    </HomeInputWrapper>
                    <HomeButtonWrapper>
                        <ButtonBox text="Login" type=""></ButtonBox>
                        <ButtonBox text="Join" type="/join"></ButtonBox>
                    </HomeButtonWrapper>
                </HomeBox>
            </HomeWrapper>
        </>
    );
}

export default Login;
