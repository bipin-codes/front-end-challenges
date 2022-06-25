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
// helper function to get the proper class needed
const getColors = (props: ButtonProps) => {
  const { variant, disableShadow, disabled, startIcon, endIcon, color, size } =
    props;
  // can refactor some of these checks to better code probably using dictionary
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
  const list = getColors(props); //get the class list
  let textToShow = props.color ? props.color : "Default"; //text to show inside the button
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
