import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRouter = ({
    authenticated, component: Component, layout: Layout, ...rest
}) => {
    return <Route {...rest} render={(props) => {
            if(true) {
                return <Layout>
                    <Component {...props} />
                </Layout>
            } else {
                return <Redirect to="/" />;
            }
        }}/>
};

export default withRouter(PrivateRouter);