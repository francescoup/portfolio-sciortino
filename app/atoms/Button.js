import React from "react";

const Button = ({ classname, children }) => {
  return <button className={classname}>{children}</button>;
};

export default Button;
