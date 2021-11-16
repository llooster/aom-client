import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Link.scss";

const Link = (props) => {
    
    const { 
        className = "",
        type,
        to = undefined,
        label
    } = props;
    
    return  <RouterLink
                className={`${className} link ${type}`}
                to={to}
            >
                {label}
            </RouterLink>
}

export default Link;
