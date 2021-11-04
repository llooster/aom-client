import React from "react";
import "./Button.scss";

const Button = (props) => {
    
    const { 
        className = "",
        type = "primary", 
        to = undefined,
        label, 
        onClick 
    } = props;
    
    return  <button
                className={`${className} btn ${type}`}
                onClick={onClick}
            >
                {label}
            </button>
}

export default Button;
