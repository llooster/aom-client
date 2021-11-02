import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import { useSelector, useDispatch } from "react-redux";
import { LoginPage, JoinPage, LessonsPage, MemberPage } from "./pages";
import { MainLayout } from "./layout";


function App() {

    // const counter = useSelector((state) => state.counter);
    // const name = useSelector((state) => state.name);

    // counter에
    // const dispatch = useDispatch();
    return (
        <>
            {/* <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                INCREMENT
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                DECREMENT
            </button>
            <h1>NAME: {name}</h1>
            <button onClick={() => dispatch({ type: "FirstName" })}>
                FirstName
            </button>
            <button onClick={() => dispatch({ type: "LastName" })}>
                LastName
            </button> */}
            <Reset />
            <BrowserRouter>
                <Switch>
                    <Route exact path={""} component={LoginPage} />
                    {/* <Route path={"/join"} component={JoinPage} /> */}
                    {/* <Route path={"/lesson"} component={LessonsPage} />*/}
                    <MainLayout>
                        <Route path={"/lessons"} component={LessonsPage} />
                        <Route path={"/members"} component={MemberPage} />
                    </MainLayout>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
