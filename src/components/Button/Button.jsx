import React from "react";
import "./Button.scss";

const Button = (props) => {
    const {
        className = "",
        type = "primary",
        id,
        value,
        label,
        onClick,
    } = props;

    return (
        <button
            className={[className, "btn", type].join(" ")}
            id={id}
            onClick={onClick}
            value={value}
        >
            {label}
        </button>
    );
};

export default Button;
