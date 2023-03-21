import styles from "./ToDoList.module.css";
import { Empty } from "../Empty";
import { Trash } from "phosphor-react";
import { StateTodo } from "../../App";
import { useState } from "react";

interface PropsToDoList {
  todos: StateTodo[];
  deleteTodo: (id: number) => void;
}

export function ToDoList({ todos, deleteTodo }: PropsToDoList) {
  const [checkedValues, setCheckedValues] = useState([] as StateTodo[]);
  const quantityTodo = todos.length;
  const showSection = quantityTodo ? true : false;
  const completedTodos = checkedValues.filter(
    (todo) => todo.checked === true
  ).length;

  function deleteItem(id: number) {
    const { indexTodo } = getExistTodo(id);
    checkedValues.splice(indexTodo, 1);
    deleteTodo(id);
  }

  function changeCheck(id: number) {
    const { indexTodo, findedTodo } = getExistTodo(id);

    if (findedTodo?.id) {
      findedTodo.checked = !findedTodo?.checked;

      if (indexTodo < 0) {
        setCheckedValues([...checkedValues, findedTodo]);
        return;
      }

      const newTodo = checkedValues.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: findedTodo.checked };
        }
        return todo;
      });

      setCheckedValues(newTodo);
    }
  }

  function getExistTodo(id: number) {
    const findedTodo = todos.find((todo) => todo.id === id);

    const indexTodo = checkedValues.findIndex(
      (todo) => todo.id === findedTodo?.id
    );
    return {
      findedTodo,
      indexTodo,
    };
  }

  return (
    <div className={styles.toDoList}>
      <div className={styles.toDoInformation}>
        <div>
          Terefas Criadas
          <span className={styles.toDoCounter}>{quantityTodo}</span>
        </div>
        <div>
          Concluídas
          <span className={styles.toDoCounter}>
            {completedTodos} de {quantityTodo}
          </span>
        </div>
      </div>
      <div className={styles.toDos}>
        <Empty show={showSection} />
        <ul
          className={`${styles.toDoContent} 
          ${showSection ? "" : styles.hidden}`}
        >
          {todos.map(({ id, todo, checked }) => {
            return (
              <li key={id}>
                <input
                  type="checkbox"
                  name="input_todo"
                  onChange={() => changeCheck(id)}
                />
                <p>{todo}</p>
                <Trash size={24} onClick={() => deleteItem(id)} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
