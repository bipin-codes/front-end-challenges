import React from "react";
import { Button } from "./components/Button/Button";
export const App: React.FC = () => {
  const outDivStyle = { margin: 100 };
  const inDivStyle = { margin: 10 };
  return (
    <div style={outDivStyle}>
      {/* LABELS */}
      <h4>Buttons</h4>

      {/* SIMPLE BUTTON */}
      <div style={inDivStyle}>
        {"<Button />"}
        <br />
        <Button />
      </div>

      {/* OUTLINE BUTTON */}
      <div style={inDivStyle}>
        {"<Button variant='outline'/>"}
        <br />
        <Button variant="outline" />
      </div>

      {/* Text BUTTON */}
      <div style={inDivStyle}>
        {"<Button variant='text'/>"}
        <br />
        <Button variant="text" />
      </div>
    </div>
  );
};
