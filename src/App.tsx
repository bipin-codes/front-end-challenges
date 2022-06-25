import React from "react";
import { Button } from "./components/Button/Button";
import "./App.css";
export const App: React.FC = () => {
  return (
    <>
      <h4 style={{ margin: 30 }}>Buttons</h4>

      <div className="outDivStyle">
        {/* LABELS */}

        {/* SIMPLE BUTTON */}
        <div className="inDivStyle " style={{ gridRowStart: 1 }}>
          {"<Button />"}
          <br />
          <Button />
        </div>

        {/* OUTLINE BUTTON */}
        <div className="inDivStyle " style={{ gridRowStart: 2 }}>
          {"<Button variant='outline'/>"}
          <br />
          <Button variant="outline" />
        </div>

        {/* Text BUTTON */}
        <div className="inDivStyle " style={{ gridRowStart: 3 }}>
          {"<Button variant='text'/>"}
          <br />
          <Button variant="text" />
        </div>

        {/* No-Shadow Button */}
        <div className="inDivStyle " style={{ gridRowStart: 4 }}>
          {"<Button disableShadow/>"}
          <br />
          <Button disableShadow />
        </div>

        {/* Disabled BUTTON */}
        <div className="inDivStyle " style={{ gridRowStart: 5 }}>
          {"<Button disabled/>"}
          <br />
          <Button disabled variant="outline" />
        </div>

        {/* Start Icon BUTTON */}
        <div className="inDivStyle" style={{ gridRowStart: 6 }}>
          <div className="innerdiv">
            <div>
              {"<Button startIcon='add_shopping_cart' />"}
              <br />
              <Button startIcon="add_shopping_cart" />
            </div>
            <div>
              {"<Button startIcon='add_shopping_cart' />"}
              <br />
              <Button endIcon="nat" />
            </div>
          </div>
        </div>
        {/* SIZE */}
        {/* COLOR */}
        <div className="inDivStyle" style={{ gridRowStart: 7 }}>
          <div className="innerdiv">
            <div>
              {"<Button size='sm' />"}
              <br />
              <Button size="sm" />
            </div>
            <div>
              {"<Button size='md' />"}
              <br />
              <Button size="md" />
            </div>

            <div>
              {"<Button size='lg' />"}
              <br />
              <Button size="lg" />
            </div>
          </div>
        </div>
        {/* COLOR */}
        <div className="inDivStyle" style={{ gridRowStart: 8 }}>
          <div className="innerdiv">
            <div>
              {"<Button color='default' />"}
              <br />
              <Button color="default" />
            </div>
            <div>
              {"<Button color='primary' />"}
              <br />
              <Button color="primary" />
            </div>

            <div>
              {"<Button color='seconday' />"}
              <br />
              <Button color="secondary" />
            </div>
            <div>
              {"<Button color='danger' />"}
              <br />
              <Button color="danger" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
