import { useState } from "react";
import "./global.css";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { ToDoList } from "./components/ToDoList";

export interface StateTodo {
  id: number;
  todo: string;
  checked: boolean;
}

export function App() {
  const [todos, setTodos] = useState([] as StateTodo[]);

  function handleTodo(todo: string) {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        todo: todo,
        checked: false,
      },
    ]);
  }

  function deleteTodo(id: number) {
    const todosWithoutId = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(todosWithoutId);
  }

  return (
    <div>
      <Header />
      <InputTodo createTodo={handleTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
