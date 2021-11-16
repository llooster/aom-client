import React from "react";
import "./Button.scss";

const Button = (props) => {
    const {
        className = "",
        type = "primary",
        label,
        onClick,
    } = props;

    return (
        <button className={[className, "btn", type].join(" ")} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
