import React from "react";
import useGlobalState from "../../context/useGlobalState";
import { deleteTodo, updateTodo } from "../../services/api";
import Input from "../Input";
import "./todoItem.scss";

const TodoItem = ({ todo }) => {
  const { globalDispatch } = useGlobalState();

  const handleCheckboxChange = async (status) => {
    try {
      const { data } = await updateTodo(todo.id, { ...todo, status });
      globalDispatch({
        type: "update_todo",
        payload: { id: data.id, status: data.status },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteTodo(id);
      globalDispatch({
        type: "delete_todo",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`todo ${todo.status ? "todo--done" : ""}`}>
      <Input
        className="todo__check"
        type="checkbox"
        checked={todo.status}
        onChange={(event) => handleCheckboxChange(event.target.checked)}
      />
      <span className="todo__name">{todo.name}</span>
      <img onClick={() => handleDeleteClick(todo.id)} className="todo__trash" src="/icons/trash.svg" alt="trash" />
    </div>
  );
};

export default TodoItem;
