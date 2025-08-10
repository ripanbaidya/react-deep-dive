import React from 'react'

const TodoItem1 = () => {
    let taskName = "Learn System Design";
    let deadline = "11/08/2025";
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

export default TodoItem1