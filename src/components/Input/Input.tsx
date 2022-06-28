import React, { useState } from "react";
import "./Input.css";
export const Input: React.FC = () => {
  const [isFocused, setIsFocus] = useState(false);
  return (
    <>
      <div>
        <label className={isFocused ? "label-focus" : "label"}> label</label>
        <br></br>
        <input
          onFocus={(e) => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          className="input"
          placeholder="Placeholder"
        />
      </div>
    </>
  );
};
