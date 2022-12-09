import React from 'react'
import { MdDelete } from "react-icons/md";

import "./styles.css"

const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={["todo", todo.checked ? "checked" : ""].join(" ")}
                onClick={() => onToggle(todo)}
                role="button"
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button className="remove" type="button"
              onClick={() => onRemove(todo)}>
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
  )
}

export default TodoList
