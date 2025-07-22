import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <React.Fragment>
      <div
        className={`card mb-2 shadow-sm border-0 ${
          todo.completed ? "bg-light" : "bg-white"
        }`}
      >
        <div className="card-body d-flex justify-content-between align-items-center">
          <div
            onClick={() => onToggle(todo.id)}
            className="d-flex align-items-center flex-grow-1"
            style={{ cursor: "pointer" }}
          >
            <i
              className={`bi ${
                todo.completed
                  ? "bi-check-circle-fill text-success"
                  : "bi-circle text-secondary"
              } fs-5 me-3 transition`}
            ></i>
            <span
              className={`fs-6 ${
                todo.completed
                  ? "text-decoration-line-through text-muted"
                  : "text-dark"
              }`}
            >
              {todo.text}
            </span>
          </div>

          <button
            className="btn btn-sm btn-outline-danger ms-3"
            onClick={() => onDelete(todo.id)}
            title="Delete"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
