import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./inputBox.scss";
import useGlobalState from "../../context/useGlobalState";
import { createTodo } from "../../services/api";
import uniqid from "../../utils/uniqid";

const InputBox = () => {
  const { globalDispatch } = useGlobalState();

  const [todo, setTodo] = useState("");

  const handleAddClick = async () => {
    try {
      const { data } = await createTodo({
        id: uniqid(), // prefix, isRandom
        status: false,
        name: todo,
      });
      globalDispatch({ type: "add_todo", payload: data });
      setTodo("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="inputBox">
      <Input value={todo} onChange={(event) => setTodo(event.target.value)} placeholder="New Task..." />
      <Button onClick={handleAddClick}>Add</Button>
    </div>
  );
};

export default InputBox;
