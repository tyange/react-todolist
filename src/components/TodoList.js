import React from "react";
import { useState } from "react";
import TodoModal from "./TodoModal";

function TodoList(props) {
  const [completedTodo, setComplete] = useState(false);
  const {
    todo,
    handleDeleted,
    handleEdit,
    handleClickTodo,

    modalEdit,
    clickedTodo,
    modalStatus,
    modalClose
  } = props;

  function handleComplete() {
    setComplete(!completedTodo);
    console.log(completedTodo);
  }
  return (
    <li
      className="list-group-item d-flex justify-content-between my-2 row"
      data-target="#exampleModalCenter"
    >
      {completedTodo ? (
        <p className="text-muted text-decoration-line">{todo}</p>
      ) : (
        <p className="font-weight-bold">{todo}</p>
      )}

      <div className="todo-icon">
        <button
          className="btn btn-outline-secondary btn-success text-white btn-sm"
          onClick={handleEdit}
        >
          수정
        </button>
        <button
          className="btn btn-outline-secondary btn-danger text-white mx-1 btn-sm"
          onClick={handleDeleted}
        >
          삭제
        </button>
        <button
          className="btn btn-outline-secondary btn-danger text-white mr-1 btn-sm"
          onClick={handleClickTodo}
        >
          보기
        </button>
        <button
          className="btn btn-outline-secondary btn-primary text-white btn-sm"
          onClick={handleComplete}
        >
          완료
        </button>
      </div>
      <TodoModal
        modalStatus={modalStatus}
        modalClose={modalClose}
        modalEdit={modalEdit}
        clickedTodo={clickedTodo}
        handleComplete={handleComplete}
        completedTodo={completedTodo}
      />
    </li>
  );
}

export default TodoList;
