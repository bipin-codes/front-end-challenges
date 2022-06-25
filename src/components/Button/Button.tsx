import React from "react";
import "./button.css";
interface ButtonProps {
  variant?: string;
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, disableShadow, disabled, startIcon, endIcon, color } = props;

  let list: Array<string | boolean> = ["original"];
  if (variant) list.push(variant);
  if (color) list.push(color);
  if (disableShadow) list.push("disableShadow");
  if (disabled) list.push("disabled");
  if (startIcon || endIcon) list.push("primary");

  let textToShow = color ? color : "Default";

  return (
    <>
      <button disabled={disabled} className={list.join(" ")}>
        {startIcon && <span className="material-icons">{startIcon}</span>}
        <span>{textToShow}</span>
        {endIcon && <span className="material-icons">{endIcon}</span>}
      </button>
    </>
  );
};
