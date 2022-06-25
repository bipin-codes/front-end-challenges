import React from "react";
import "./button.css";
interface ButtonProps {
  variant?: string;
  disableShadow?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  console.log(props);
  const { variant, disableShadow, disabled } = props;

  let list: Array<string | boolean> = ["default"];
  if (variant) list.push(variant);
  if (disableShadow) list.push("disableShadow");
  if (disabled) list.push("disabled");

  return (
    <>
      <button disabled className={list.join(" ")}>
        Default
      </button>
    </>
  );
};
