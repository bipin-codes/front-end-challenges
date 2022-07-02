import React, { useState } from "react";
import "./Input.css";

interface InputProps {
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  startIcon?: string;
  endIcon?: string;
  text?: string;
}

// decide styles for input and label
const getStyles = (
  { error, helperText }: InputProps,
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
  const { disabled, helperText, startIcon, endIcon, text } = props;

  return (
    <>
      <div>
        <label
          className={`label ${getStyles(props, isFocused, isHovered, "label")}`}
        >
          label
        </label>
        <br></br>
        {/* SIMULATING DIV AS INPUT BOX */}
        <div
          className={`input ${getStyles(
            props,
            isFocused,
            isHovered,
            "input"
          )} ${disabled ? "disabled" : ""}`}
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
        >
          {startIcon && <span className="material-icons">{startIcon}</span>}
          {/* SHOW INPUT BOX IF REQUIRED */}
          <input
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
            placeholder="Placeholder"
            disabled={disabled}
            value={text ? text : ""}
          />
          {endIcon && <span className="material-icons">{endIcon}</span>}
        </div>
        {/* SHOW HELPER TEXT IF REQUIRED */}
        {helperText && (
          <div
            className={`label ${getStyles(
              props,
              isFocused,
              isHovered,
              "label"
            )}`}
          >
            {helperText}
          </div>
        )}
      </div>
    </>
  );
};
