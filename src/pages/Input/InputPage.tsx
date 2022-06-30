import React from "react";
import { Input } from "../../components/Input/Input";
import "./InputPage.css";
export const InputPage: React.FC = () => {
  return (
    <div>
      <h4 style={{ margin: 30 }}>Inputs</h4>

      <div className="parent">
        {/* LABELS */}

        {/* SIMPLE Input */}
        <div className="section-div" style={{ gridRowStart: 1 }}>
          <span style={{ marginBottom: 0, display: "block" }}>
            {"<Input />"}
          </span>
          <br />
          <Input />
        </div>

        {/* Error Input */}
        <div className="section-div " style={{ gridRowStart: 2 }}>
          <span style={{ marginBottom: 0, display: "block" }}>
            {"<Input error/>"}
          </span>
          <br />
          <Input error />
        </div>
        {/* Disabled */}

        <div className="section-div " style={{ gridRowStart: 3 }}>
          <span style={{ marginBottom: 0, display: "block" }}>
            {"<Input disabled/>"}
          </span>
          <br />
          <Input disabled />
        </div>

        <div className="section-div" style={{ gridRowStart: 4 }}>
          <div className="row-div">
            <div>
              <span>{"<Input helperText='Some Helper Text'/>"}</span>
              <Input helperText="Some helper text" />
            </div>
            <div>
              <span>{"<Input helperText='Some Helper Text' error/>"}</span>
              <Input helperText="Some helper text" error />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
