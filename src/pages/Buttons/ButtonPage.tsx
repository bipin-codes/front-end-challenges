import React from "react";
import { Button } from "../../components/Button/Button";
import "./ButtonPage.css";
export const ButtonPage: React.FC = () => {
  return (
    <div>
      <h4 style={{ margin: 30 }}>Buttons</h4>

      <div className="parent">
        {/* LABELS */}

        {/* SIMPLE BUTTON */}
        <div className="section-div " style={{ gridRowStart: 1 }}>
          {"<Button />"}
          <br />
          <Button />
        </div>

        {/* OUTLINE BUTTON */}
        <div className="section-div " style={{ gridRowStart: 2 }}>
          {"<Button variant='outline'/>"}
          <br />
          <Button variant="outline" />
        </div>

        {/* Text BUTTON */}
        <div className="section-div " style={{ gridRowStart: 3 }}>
          {"<Button variant='text'/>"}
          <br />
          <Button variant="text" />
        </div>

        {/* No-Shadow Button */}
        <div className="section-div " style={{ gridRowStart: 4 }}>
          {"<Button disableShadow/>"}
          <br />
          <Button disableShadow />
        </div>

        {/* Disabled BUTTON */}
        <div className="section-div " style={{ gridRowStart: 5 }}>
          {"<Button disabled/>"}
          <br />
          <Button disabled />
        </div>

        {/* Start Icon BUTTON */}
        <div className="section-div" style={{ gridRowStart: 6 }}>
          <div className="row-div">
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
        <div className="section-div" style={{ gridRowStart: 7 }}>
          <div className="row-div">
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
        <div className="section-div" style={{ gridRowStart: 8 }}>
          <div className="row-div">
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
    </div>
  );
};
