import React, { FC, PropsWithChildren } from "react";

import Styles from "./Tabs.module.css";
const Tabs: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={Styles.tabContainer}>
      <ul className={Styles.tab_group}>
        {/* FIX THE SHIFTING DUE TO BORDER */}
        <div>
          <li className={Styles.tabTitle}>All</li>
          <div className={Styles.tab_fancy}></div>
        </div>
        <div>
          <li className={Styles.tabTitle}>Active</li>
          <div className={Styles.tab_fancy}></div>
        </div>
        <div>
          <li className={Styles.tabTitle}>Completed</li>
          <div className={Styles.tab_fancy}></div>
        </div>
      </ul>
      <div className={Styles.outlet}>{children}</div>
    </div>
  );
};
export default Tabs;
