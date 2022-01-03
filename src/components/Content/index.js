import React from "react";
import InputBox from "../InputBox";
import TodoList from "../TodoList";
import "./content.scss";

const Content = () => {
  return (
    <div className="content">
      <InputBox />
      <TodoList />
    </div>
  );
};

export default Content;
