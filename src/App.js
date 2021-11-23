import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { DefaultRouter } from "./router";
import rootReducer from "./redux";
import { DefaultLayout, FullWidthLayout, MainLayout } from "./layout";
import {
    LoginPage,
    RegisterPage,
    LessonsPage,
    LessonOne,
    LessonRegister,
    MemberPage,
    MemberOne,
    MemberRegister,
    Attendance,
    Payment,
} from "./pages";
import "./App.scss";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <DefaultRouter
                        exact
                        path={["/", "/login"]}
                        component={LoginPage}
                        layout={DefaultLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/register"}
                        component={RegisterPage}
                        layout={DefaultLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/lessons"}
                        component={LessonsPage}
                        layout={MainLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/lessons/register"}
                        component={LessonRegister}
                        layout={MainLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/lessons/:lessonId"}
                        component={LessonOne}
                        layout={MainLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/members"}
                        component={MemberPage}
                        layout={MainLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/members/register"}
                        component={MemberRegister}
                        layout={MainLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/members/:memberId"}
                        component={MemberOne}
                        layout={MainLayout}
                    />
                    {/* exact path로 각각 했는데 왜 path가 엉킴*/}
                    <DefaultRouter
                        exact
                        path={"/attendance"}
                        component={Attendance}
                        layout={FullWidthLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/payment"}
                        component={Payment}
                        layout={FullWidthLayout}
                    />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
