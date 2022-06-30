import React, { useState } from "react";
import "./Input.css";

interface InputProps {
  error?: boolean;
  disabled?: boolean;
}

// decide styles for input and label
const getStyles = (
  { error }: InputProps,
  isFocused: boolean,
  isHovered: boolean,
  elementName: string
): string => {
  if (error) {
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
  const [isFocused, setIsFocus] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  //Unrwapping props
  const { disabled } = props;

  return (
    <>
      <div>
        <label
          className={`label ${getStyles(props, isFocused, isHovered, "label")}`}
        >
          label
        </label>
        <br></br>
        <input
          disabled={disabled}
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
          className={`input ${getStyles(
            props,
            isFocused,
            isHovered,
            "input"
          )} ${disabled ? "disabled" : ""}`}
          placeholder="Placeholder"
        />
      </div>
    </>
  );
};
