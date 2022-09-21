import React, { FC } from "react";
import "./Header.css";
const Header: FC<{ staysLength: number }> = ({ staysLength }) => {
  return (
    <div className={"content_body"}>
      <div className={"header_container"}>
        <div className={"header_left"}>Stays in Finland</div>
        <div className={"header_right"}>{staysLength}+Stays</div>
      </div>
      {/* LOAD rooms in grid */}
    </div>
  );
};
export default Header;
