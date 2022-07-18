import React from "react";
import Tab from "../../components/Todo/Tab/Tabs";
import Styles from "./Todo.module.css";
const TodoPage = () => {
  return (
    <div className={Styles.td_outer_div}>
      <div>
        <h1>#todo</h1>
      </div>

      <div className={Styles.tabs}>
        <Tab></Tab>
      </div>
    </div>
  );
};

export default TodoPage;
