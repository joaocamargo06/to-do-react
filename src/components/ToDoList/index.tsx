import styles from "./ToDoList.module.css";
import { Empty } from "../Empty";
import { Trash } from "phosphor-react";

export function ToDoList() {
  return (
    <div className={styles.toDoList}>
      <div className={styles.toDoInformation}>
        <div>
          Terefas Criadas
          <span className={styles.toDoCounter}>10</span>
        </div>
        <div>
          Concluídas
          <span className={styles.toDoCounter}>0 de 10</span>
        </div>
      </div>
      <div className={styles.toDos}>
        <Empty />
        <ul className={styles.toDoContent}>
          <li>
            <input type="checkbox" id="html" name="fav_language" value="HTML" />
            <p>Integer urna interdum massa libger.</p>
            <Trash size={24} />
          </li>
          <li>
            <input type="checkbox" id="html" name="fav_language" value="HTML" />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <Trash size={24} />
          </li>
        </ul>
      </div>
    </div>
  );
}
