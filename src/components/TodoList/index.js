import React from "react";
import useGlobalState from "../../context/useGlobalState";
import TodoItem from "../TodoItem";
import "./todoList.scss";

const TodoList = () => {
  const { globalState } = useGlobalState();

  return (
    <div className="todos">
      {globalState.todos.length ? (
        globalState.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      ) : <span className="todos__not-found">Nothing here yet.</span>}
    </div>
  );
};

export default TodoList;
