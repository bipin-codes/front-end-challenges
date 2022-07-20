import React, { FC, PropsWithChildren } from "react";

import Styles from "./Tabs.module.css";
const Tabs: FC<
  PropsWithChildren<{
    currentTab: string;
    onTabSelected: (tabName: string) => void;
  }>
> = ({ children, currentTab, onTabSelected }) => {
  return (
    <div className={Styles.tabContainer}>
      <ul className={Styles.tab_group}>
        {/* FIX THE SHIFTING DUE TO BORDER */}
        <div
          onClick={() => {
            onTabSelected("All");
          }}
        >
          <li className={Styles.tabTitle}>All</li>
          <div className={currentTab === "All" ? Styles.tab_fancy : ""}></div>
        </div>
        <div
          onClick={() => {
            onTabSelected("Active");
          }}
        >
          <li className={Styles.tabTitle}>Active</li>
          <div
            className={currentTab === "Active" ? Styles.tab_fancy : ""}
          ></div>
        </div>
        <div
          onClick={() => {
            onTabSelected("Completed");
          }}
        >
          <li className={Styles.tabTitle}>Completed</li>
          <div
            className={currentTab === "Completed" ? Styles.tab_fancy : ""}
          ></div>
        </div>
      </ul>
      <div className={Styles.outlet}>{children}</div>
    </div>
  );
};
export default Tabs;
