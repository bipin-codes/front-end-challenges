import React, { FC, PropsWithChildren } from "react";

import "./Tabs.css";
const Tabs: FC<
  PropsWithChildren<{
    currentTab: string;
    onTabSelected: (tabName: string) => void;
  }>
> = ({ children, currentTab, onTabSelected }) => {
  return (
    <div className="tabContainer">
      <ul className="tab_group">
        {/* FIX THE SHIFTING DUE TO BORDER */}
        <div
          onClick={() => {
            onTabSelected("All");
          }}
        >
          <li className={"tabTitle"}>All</li>
          <div className={currentTab === "All" ? "tab_fancy" : ""}></div>
        </div>
        <div
          onClick={() => {
            onTabSelected("Active");
          }}
        >
          <li className={"tabTitle"}>Active</li>
          <div className={currentTab === "Active" ? "tab_fancy" : ""}></div>
        </div>
        <div
          onClick={() => {
            onTabSelected("Completed");
          }}
        >
          <li className={"tabTitle"}>Completed</li>
          <div className={currentTab === "Completed" ? "tab_fancy" : ""}></div>
        </div>
      </ul>
      <div className={"outlet"}>{children}</div>
    </div>
  );
};
export default Tabs;
