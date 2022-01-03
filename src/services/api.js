import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/todos",
});

export const getTodos = () => {
  return instance.get("/");
};

export const createTodo = (todo) => {
  return instance.post("/", todo);
};

export const updateTodo = (id, newTodo) => {
  return instance.put(`/${id}`, newTodo);
};

export const deleteTodo = (id) => {
  return instance.delete(`/${id}`);
};
