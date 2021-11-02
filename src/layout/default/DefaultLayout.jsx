import React from "react";
import "./DefaultLayout.scss";

const DefaultLayout = ({ children }) => {
    return <div className="DefaultLayout">
        {children}
    </div>
}

export default DefaultLayout;