import React from "react";
import { Input } from "../../components/Input/Input";
import "./InputPage.css";
export const InputPage: React.FC = () => {
  return (
    <div>
      <h4 style={{ margin: 30 }}>Inputs</h4>

      <div className="parent">
        {/* LABELS */}

        {/* SIMPLE BUTTON */}
        <div className="section-div " style={{ gridRowStart: 1 }}>
          <span style={{ marginBottom: 0, display: "block" }}>
            {"<Input />"}
          </span>
          <br />
          <Input />
        </div>
      </div>
    </div>
  );
};
