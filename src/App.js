import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { DefaultRouter, PrivateRouter } from "./router";
import rootReducer from "./redux/rootReducer";

import { DefaultLayout, MainLayout } from "./layout";
import { LoginPage, JoinPage, LessonsPage, MemberPage } from "./pages";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return  <Provider store={store}>
                <Reset />
                <BrowserRouter>
                    <Switch>
                        <DefaultRouter exact path={"/"} component={LoginPage} layout={DefaultLayout} />
                        <DefaultRouter exact path={"/join"} component={JoinPage} layout={DefaultLayout} />
                        <MainLayout>
                            <Route path={"/lessons"} component={LessonsPage} />
                            <Route path={"/members"} component={MemberPage} />
                        </MainLayout>
                    </Switch>
                </BrowserRouter>
            </Provider>;
}

export default App;
