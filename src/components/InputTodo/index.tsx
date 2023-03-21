import styles from "./InputTodo.module.css";
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";

interface PropsInputTodo {
  createTodo: (todo: string) => void;
}

export function InputTodo({ createTodo }: PropsInputTodo) {
  const [todo, setTodo] = useState("" as string);

  function insertTodo(event: FormEvent) {
    event.preventDefault();
    createTodo(todo);
    setTodo("");
  }

  function handleTodo(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTodo(event.target.value);
  }

  function setMessageInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse Campo é obrigatório!");
  }

  return (
    <form onSubmit={insertTodo} className={styles.formTodo}>
      <input
        onInvalid={setMessageInvalid}
        type="text"
        value={todo}
        placeholder="Adicione uma nova tarefa"
        onChange={handleTodo}
        required
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
