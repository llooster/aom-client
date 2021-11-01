import React, { useState } from "react";
import Login from "./pages/Login";
import Join from "./pages/Join";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    let [login, setLogin] = useState("");
    let [join, setJoin] = useState("/join");
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={login} component={Login} />
                    <Route path={join} component={Join} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
