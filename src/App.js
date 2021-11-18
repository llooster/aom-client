import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { DefaultRouter } from "./router";
import rootReducer from "./redux";
import { DefaultLayout, MainLayout } from "./layout";
import {
    LoginPage,
    RegisterPage,
    LessonsPage,
    LessonOne,
    LessonRegister,
    MemberPage,
    Attendance,
    Payment,
} from "./pages";
import "./App.scss";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
                        path={["/dashboard", "/dashboard/attendance"]}
                        component={Attendance}
                        layout={MainLayout}
                    />
                    <DefaultRouter
                        exact
                        path={"/dashboard/payment"}
                        component={Payment}
                        layout={MainLayout}
                    />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
