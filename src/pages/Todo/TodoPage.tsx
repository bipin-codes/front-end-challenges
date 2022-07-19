import React from "react";
import Tabs from "../../components/Todo/Tabs/Tabs";
import TabsContent from "../../components/Todo/TabsContent/TabsContent";
import Styles from "./Todo.module.css";
const TodoPage = () => {
  return (
    <div className={Styles.td_outer_div}>
      <div>
        <h1>#todo</h1>
      </div>

      <div className={Styles.tabs}>
        {/* Whole Tab Group */}
        <Tabs>
          <TabsContent />
        </Tabs>
      </div>
    </div>
  );
};

export default TodoPage;
