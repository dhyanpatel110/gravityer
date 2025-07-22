import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0)
    return <p className="text-muted text-center">No tasks found</p>;

  return (
    <React.Fragment>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </React.Fragment>
  );
};

export default TodoList;
