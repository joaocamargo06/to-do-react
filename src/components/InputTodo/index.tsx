import styles from "./InputTodo.module.css";
import { PlusCircle } from "phosphor-react";

export function InputTodo() {
  return (
    <form action="" className={styles.formTodo}>
      <input type="text" />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
