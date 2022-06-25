import React from "react";
import "./button.css";
interface ButtonProps {
  variant?: string;
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  color?: string;
  size?: string;
}

const getColors = (props: ButtonProps) => {
  const { variant, disableShadow, disabled, startIcon, endIcon, color, size } =
    props;

  let list: Array<string | boolean> = ["original"];
  if (variant) list.push(variant);
  if (color) list.push(color);
  if (disableShadow) list.push("disableShadow");
  if (disabled) list.push("disabled");
  if (startIcon || endIcon) list.push("primary");
  if (size) list.push(size);
  return list;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const list = getColors(props);
  let textToShow = props.color ? props.color : "Default";
  return (
    <>
      <button disabled={props.disabled} className={list.join(" ")}>
        {props.startIcon && (
          <span className="material-icons">{props.startIcon}</span>
        )}
        <span>{textToShow}</span>
        {props.endIcon && (
          <span className="material-icons">{props.endIcon}</span>
        )}
      </button>
    </>
  );
};
