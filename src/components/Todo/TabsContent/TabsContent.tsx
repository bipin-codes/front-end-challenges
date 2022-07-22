import React, { PropsWithChildren, useState } from "react";
import { ToDo } from "../../../pages/Todo/type";
import Styles from "./TabsContent.module.css";

interface TabsContentProps {
  // We could've obviously created a type in a separate file for it had this been a bigger project
  todos: Array<ToDo>;
  currentTab: string;
  onAddTask: (task: string) => void;
  onChangeStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

const TabsContent: React.FC<PropsWithChildren<TabsContentProps>> = ({
  children,
  todos,
  currentTab,
  onAddTask,
  onChangeStatus,
  onDelete,
}) => {
  const [task, setTask] = useState("");
  return (
    <>
      {currentTab !== "Completed" && (
        <div className={Styles.tabs}>
          <input
            onChange={(val) => {
              setTask(val.target.value);
            }}
            placeholder="add details"
            className={Styles.input}
            value={task}
          ></input>
          <button
            type="button"
            className={Styles.button_style}
            onClick={() => {
              onAddTask(task);
              setTask("");
            }}
          >
            Add
          </button>
        </div>
      )}

      <ul className={Styles.todoListing}>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                display: "flex",
                marginTop: 10,
                marginBottom: 10,
                fontSize: 16,
                justifyContent: "stretch",
              }}
            >
              <input
                type={"checkbox"}
                className={Styles.checkbox}
                checked={todo.completed}
                onChange={() => {
                  onChangeStatus(todo.id);
                }}
              ></input>
              <span
                style={
                  todo.completed
                    ? { textDecoration: "line-through", color: "black" }
                    : { color: "black" }
                }
              >
                {todo.title}
              </span>
              {currentTab === "Completed" && (
                <button
                  style={{
                    marginLeft: "auto",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onDelete(todo.id);
                  }}
                >
                  <span className={"material-icons remove_outline"}>
                    {"delete"}
                  </span>
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TabsContent;
