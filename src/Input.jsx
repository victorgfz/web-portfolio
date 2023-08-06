import React from "react";

const Input = ({ type, id, placeholder, change, value, ...props }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={change}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
