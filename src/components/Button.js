import React from "react";
import "./ButtonStyle.css";

const Button = (props) => {
  return (
    <button
      className={`button ${props.wide ? "wide" : " "}`}
      onClick={props.handler}
    >
      {props.content}
    </button>
  );
};

export default Button;
