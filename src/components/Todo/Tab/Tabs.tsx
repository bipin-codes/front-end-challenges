import React from "react";
import { Outlet } from "react-router-dom";

import Styles from "./Tab.module.css";
const Tab = () => {
  return (
    <div>
      <ul className={Styles.tab_group}>
        <li className={Styles.tab}>All</li>
        <li className={Styles.tab}>Active</li>
        <li className={Styles.tab}>Completed</li>
      </ul>
      <div className={Styles.outlet}></div>
    </div>
  );
};
export default Tab;
