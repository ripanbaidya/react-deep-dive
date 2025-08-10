import React from 'react'

const TodoItem2 = () => {
  let taskName = "Revise Graph";
  let deadline = "12/08/2025";
  return (
    <div class="container">
      <div class="row custom-row">
        <div class="col-6">{taskName}</div>
        <div class="col-4">{deadline}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger custome-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2