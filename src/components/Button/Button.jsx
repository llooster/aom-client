import React from "react";
import "./Button.scss";

const Button = (props) => {
    const {
        id,
        className = "",
        type = "primary",
        label,
        onClick,
    } = props;

    return (
        <button 
            id={id} 
            className={[className, "btn", type].join(" ")} 
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
