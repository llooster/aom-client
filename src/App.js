import React, { useState } from "react";
import LoginPage from "./pages/login";
import JoinPage from "./pages/join";
import MainPage from "./pages/main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";

import { useSelector, useDispatch } from "react-redux";

function App() {
    let [login, setLogin] = useState("");
    let [join, setJoin] = useState("/join");

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
                    {/* <Route exact path={""} component={LoginPage} /> */}
                    {/* <Route path={"/join"} component={JoinPage} /> */}
                    <Route path={""} component={MainPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
