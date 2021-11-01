import styled from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";
export const HomeWrapper = styled.div`
    box-sizing: border-box;

    /* background-color: greenyellow; */
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const HomeBox = styled.div`
    box-sizing: border-box;

    /* background-color: gray; */
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const HomeTitle = styled.div`
    box-sizing: border-box;

    /* background-color: white; */

    width: 100%;
    height: 100px;
    font-size: 80px;
    text-align: center;
    color: #3080e3;
`;
export const HomeInputWrapper = styled.div`
    box-sizing: border-box;

    /* background-color: white; */
    margin-top: 50px;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const HomeButtonWrapper = styled.div`
    box-sizing: border-box;

    /* background-color: white; */

    width: 100%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #3080e3;
`;

export const HomeText = styled.div`
    box-sizing: border-box;

    margin: 0 10px;
    /* background-color: #ffff58; */
    color: gray;
    font-size: 14px;
`;
export const HomeInput = styled.input.attrs((props) => ({
    type: props.type === "password" ? "password" : "text",
    placeholder: props.type === "password" ? "password" : "ID",
}))`
    box-sizing: border-box;

    background-color: transparent;
    height: 35px;
    color: rgb(96, 96, 96);
    font-size: 15px;
    border: solid gray 0.5px;
    outline: none;
    margin: 0 10px;
    border-radius: 5px;
`;
export const HomeButton = styled(Link)`
    box-sizing: border-box;

    /* background-color: white; */
    text-decoration: none;
    outline: none;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    width: 185px;
    height: 35px;
    font-size: 15px;
    color: #77b4ff;
    border: solid #77b4ff 1px;
    background: white;
    &:hover {
        background: ${lighten(0.1, "#77b4ff")};
        border: none;
        color: white;
    }
    &:active {
        background: ${darken(0.1, "#77b4ff")};
        border: none;
        color: white;
    }
`;
