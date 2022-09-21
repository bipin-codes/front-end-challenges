import React, { useState } from "react";
import Tabs from "../../components/Todo/Tabs/Tabs";
import TabsContent from "../../components/Todo/TabsContent/TabsContent";
import "./Todo.css";
import { ToDo } from "./type";

const getRelativeTodos = (currentTab: string, todos: Array<ToDo>) => {
  if (currentTab === "All") return todos;
  if (currentTab === "Active") return todos.filter((x) => !x.completed);
  return todos.filter((x) => x.completed);
};

const TodoPage = () => {
  const [todos, setTodos] = useState<Array<ToDo>>([]);
  const [currentTab, setCurrentTab] = useState("All");
  return (
    <div className="td-outer-div">
      <div>
        <h1>#todo</h1>
      </div>

      {/* Whole Tab Group */}
      <Tabs
        currentTab={currentTab}
        onTabSelected={(selected: string) => {
          setCurrentTab(selected);
        }}
      >
        <TabsContent
          onAddTask={(task: string) => {
            setTodos([
              ...todos,
              {
                title: task,
                completed: false,
                id: Math.floor(Math.random() * 9999999),
              },
            ]);
          }}
          currentTab={currentTab}
          todos={getRelativeTodos(currentTab, todos)}
          onChangeStatus={(id: number) => {
            setTodos((prevState) => {
              const newState = prevState.map((item) => {
                if (item.id === id) {
                  const flag = item.completed;
                  return { ...item, completed: !flag };
                }
                return item;
              });
              return newState;
            });
          }}
          onDelete={(id: number) => {
            setTodos(todos.filter((x) => x.id !== id));
          }}
        />
      </Tabs>
    </div>
  );
};

export default TodoPage;
