import React from "react";

const Filter = ({ current, onChange }) => {
  const filters = ["all", "pending", "completed"];

  return (
    <React.Fragment>
      <div className="btn-group mb-3 d-flex justify-content-center">
        {filters.map((f) => (
          <button
            key={f}
            className={`btn ${
              current === f ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => onChange(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Filter;
