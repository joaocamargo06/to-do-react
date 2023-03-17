import { ClipboardText } from "phosphor-react";
import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.empty}>
      <ClipboardText size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
