import React from "react";
import "./button.css";
interface ButtonProps {
  variant?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant } = props;

  let list = ["default"];
  if (variant) list.push(variant);

  return (
    <>
      <button className={list.join(" ")}>Default</button>
    </>
  );
};
