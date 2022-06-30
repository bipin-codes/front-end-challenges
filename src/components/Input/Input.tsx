import React, { useState } from "react";
import "./Input.css";

interface InputProps {
  error?: boolean;
}
const getLabelClass = (
  props: InputProps,
  isFocused: boolean,
  isHovered: boolean,
  elementName: string
): string => {
  if (props.error) {
    // isFocused should always be on top-> as focus needs to take priority on hover
    if (isFocused) return `${elementName}-danger-focus`;
    if (isHovered) return `${elementName}-danger-hover`;

    return `${elementName}-danger`;
  } else {
    if (isFocused) return `${elementName}-primary-focus`;

    return `${elementName}-primary`;
  }
};

export const Input: React.FC<InputProps> = (props) => {
  console.log("Render");

  const [isFocused, setIsFocus] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  //Unrwapping props
  const error = props.error;
  const styleList: Array<string> = ["input"];
  if (error) {
    styleList.push("error");
  }

  return (
    <>
      <div>
        <label
          className={`label ${getLabelClass(
            props,
            isFocused,
            isHovered,
            "label"
          )}`}
        >
          label
        </label>
        <br></br>
        <input
          onFocus={(e) => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          onMouseEnter={(e) => {
            setIsHovered(true);
          }}
          onMouseLeave={(e) => {
            setIsHovered(false);
          }}
          className={`input ${getLabelClass(
            props,
            isFocused,
            isHovered,
            "input"
          )}`}
          placeholder="Placeholder"
        />
      </div>
    </>
  );
};
