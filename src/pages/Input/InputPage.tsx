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
          <div className="row-div">
            <div>
              <span style={{ marginBottom: 0, display: "block" }}>
                {"<Input />"}
              </span>
              <br />
              <Input />
            </div>
          </div>
        </div>

        {/* Error Input */}
        <div className="section-div " style={{ gridRowStart: 2 }}>
          <div className="row-div">
            <div>
              <span>{"<Input error/>"}</span>
              <br />
              <Input error />
            </div>
          </div>
        </div>
        {/* Disabled */}

        <div className="section-div " style={{ gridRowStart: 3 }}>
          <div className="row-div">
            <div>
              <span style={{ marginBottom: 0, display: "block" }}>
                {"<Input disabled/>"}
              </span>
              <br />
              <Input disabled />
            </div>
          </div>
        </div>
        {/* Helper Text */}
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

        {/* Input Icon */}
        <div className="section-div" style={{ gridRowStart: 5 }}>
          <div className="row-div">
            <div>
              <span>{"<Input startIcon=''"}</span>
              <Input startIcon="call" />
            </div>
            <div>
              <span>{"<Input endIcon=''/>"}</span>
              <Input endIcon="lock" />
            </div>
          </div>
        </div>

        {/* Input Text */}
        <div className="section-div" style={{ gridRowStart: 6 }}>
          <div className="row-div">
            <div>
              <span>{"<Input text='Some Text'"}</span>
              <Input text="Some Text" />
            </div>
          </div>
        </div>

        {/* Input Size */}
        <div className="section-div" style={{ gridRowStart: 7 }}>
          <div className="row-div">
            <div>
              <span>{"<Input size = 'sm'> "}</span>
              <Input size="sm" />
            </div>
            <div>
              <span>{"<Input size = 'md'> "}</span>
              <Input size="md" />
            </div>
          </div>
        </div>

        {/* Input fullWidth */}
        <div className="section-div" style={{ gridRowStart: 8 }}>
          <div className="row-div">
            <div style={{ width: "100%" }}>
              <span>{"<Input fullWidth> "}</span>
              <Input fullWidth />
            </div>
          </div>
        </div>
        {/* Textarea Input */}
        <div className="section-div" style={{ gridRowStart: 9 }}>
          <div className="row-div">
            <div style={{ width: "100%" }}>
              <span>{"<Input multiline rows = 3> "}</span>
              <Input startIcon="" multiline rows={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
