import React, { useState } from "react";
import LoginPage from "./pages/login";
import JoinPage from "./pages/join";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";

function App() {
    let [login, setLogin] = useState("");
    let [join, setJoin] = useState("/join");
    return (
        <>
            <Reset />
            <BrowserRouter>
                <Switch>
                    <Route exact path={""} component={LoginPage} />
                    {/* <Route path={"/join"} component={Join} /> */}
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
