import React from "react";
import styled from "styled-components";

function TodoList() {
  return (
    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="새로운 할 일" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            입력
          </button>
        </div>
      </div>
    </form>
  );
}

const Input = styled.input`
  border: none;
  outline: none;
`;

export default TodoList;
