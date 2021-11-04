import React from "react";
import { useRef, useContext } from "react";
import styles from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo Text</label>
      <input
        type="text"
        id="text"
        placeholder="Enter todo text here"
        ref={todoInputRef}
      ></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
