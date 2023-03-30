import React from "react";
import "styles.css";

const Button = (props) => {
    return <div className="styled-component">{props.children}</div>;
};

export default Button;
