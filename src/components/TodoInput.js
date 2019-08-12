import React from "react";

//함수형 컴포넌트이므로 첫번째 arg가 props가 됌
function TodoInput(props) {
  //부모 컴포넌트에서 전달받은 props를 불러옴
  const { todo, handleChange, handleSubmit, editTodo } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="새로운 할 일"
          value={todo}
          onChange={handleChange}
        />
        <div className="input-group-append" id="button-addon">
          <button
            //editTodo의 값이 true(수정하는 상태)일 때 버튼의 텍스트를 '수정'으로, 버튼의 색깔을 초록색으로 변경
            className={
              editTodo
                ? "btn btn-outline-secondary bg-success text-white"
                : "btn btn-outline-secondary"
            }
            type="submit"
          >
            {editTodo ? "수정" : "입력"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoInput;
