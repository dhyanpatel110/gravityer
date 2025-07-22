import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

const LOCAL_STORAGE_KEY = "react_todo_list";

const TodoApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load from localStorage or API once
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (saved && saved.length > 0) {
      setTodos(saved);
      setIsLoading(false);
    } else {
      // Fetch from dummyjson if nothing in localStorage
      fetch("https://dummyjson.com/todos?limit=5")
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.todos.map((todo) => ({
            id: todo.id,
            text: todo.todo,
            completed: todo.completed,
          }));
          setTodos(formatted);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formatted));
        })
        .catch((err) => console.error("Error:", err))
        .finally(() => setIsLoading(false));
    }
  }, []);

  // Save to localStorage every time todos change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <React.Fragment>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center mb-4 text-primary">
                📝 React To-Do List
              </h1>
              <AddTodo onAdd={addTodo} />
              <Filter current={filter} onChange={setFilter} />
              <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TodoApp;
