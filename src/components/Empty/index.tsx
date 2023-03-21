import { ClipboardText } from "phosphor-react";
import styles from "./Empty.module.css";

interface PropsEmpty {
  show: boolean;
}

export function Empty({ show = true }: PropsEmpty) {
  return (
    <div className={`${styles.empty} ${show ? styles.hidden : ""}`}>
      <ClipboardText size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
