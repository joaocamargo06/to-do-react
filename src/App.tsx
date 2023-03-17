import "./global.css";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { ToDoList } from "./components/ToDoList";
import { Empty } from "./components/Empty";

export function App() {
  return (
    <div>
      <Header />
      <InputTodo />
      <ToDoList />
    </div>
  );
}
