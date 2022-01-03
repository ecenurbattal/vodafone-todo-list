export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "set_todos":
      return { ...state, todos: payload };
    case "update_todo":
      return { ...state, todos: state.todos.map((item) => (item.id === payload.id ? { ...item, ...payload } : item)) };
    case "delete_todo":
      return { ...state, todos: state.todos.filter((item) => item.id !== payload) };
    case "add_todo":
      return { ...state, todos: [...state.todos, payload] };
    case "clear_todos":
      return { ...state, todos: [] };
    default:
      return state;
  }
};

export const initialValues = {
  todos: [],
};
