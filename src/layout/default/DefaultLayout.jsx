import React from "react";
import { Footer } from '../../components';
import "./DefaultLayout.scss";

const DefaultLayout = ({ children }) => {
    return <div className="DefaultLayout">
        {children}
        <Footer/>
    </div>
}

export default DefaultLayout;