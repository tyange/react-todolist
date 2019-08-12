import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

import uuid from "uuid";

function App() {
  //함수형 컴포넌트 사용하므로 useState 사용
  const [todos, setTodos] = useState([]);
  //uuid로 새로운 무작위 id값 생성
  const [id, setId] = useState(uuid());
  const [todo, setTodo] = useState("");

  const [editTodo, setEdit] = useState(false);
  const [clickedTodo, setClickedTodo] = useState("");
  const [modalStatus, setModal] = useState(false);

  function handleChange(e) {
    //input에 입력된 현재 값을 state값으로 지정
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    //input에서 입력 시 새로고침 방지
    e.preventDefault();

    //새로 추가될 todo를 newTodo 변수로 정의
    const newTodo = {
      id: id,
      todo: todo
    };

    //추가된 newTodo을 기존의 todos 배열에 추가
    const updatedTodos = [...todos, newTodo];

    //newTodo 추가된 후 setState
    setTodos(updatedTodos);
    setId(uuid());
    setTodo("");
    setEdit(false);
  }

  function handleDeleted(id) {
    //filter 메소드를 이용하여 삭제하려는 todo의 id값과 같은 값을 가진 todo를 필터링
    const filteredTodos = todos.filter(todo => todo.id !== id);
    //필터링된 투두리스트를 setState
    setTodos(filteredTodos);
  }

  function handleEdit(id) {
    //위의 삭제 함수와 같이 필터링 진행
    const filteredTodos = todos.filter(todo => todo.id !== id);
    //수정하고자하는 todo의 id 값 추출
    const selectedTodo = todos.find(todo => todo.id === id);

    //필터링된 todolist setState
    setTodos(filteredTodos);
    //id는 그대로
    setId(id);
    //선택된 todo가 input 창에 입력됌
    setTodo(selectedTodo.todo);
    //editTodo의 값을 true로 변경
    setEdit(true);
  }

  function handleClickTodo(id) {
    const selectedTodo = todos.find(todo => todo.id === id);
    //선택된 todo를 clickedTodo(state)로 지정
    setClickedTodo(selectedTodo.todo);
    setId(id);
    setModal(true);
    console.log(id);
    console.log(todos);
  }
  function modalEdit(id) {
    const filteredTodos = todos.filter(todo => todo.id !== id);

    setTodos(filteredTodos);
    setTodo(clickedTodo);
    setId(id);
    setEdit(true);
    setModal(false);
  }
  function modalClose() {
    setClickedTodo("");
    setModal(false);
  }

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Container>
          <TodoInput
            todo={todo}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editTodo={editTodo}
          />
          <Ul className="list-group">
            {todos.map(todo => {
              return (
                <TodoList
                  key={todo.id}
                  todo={todo.todo}
                  editTodo={editTodo}
                  handleDeleted={() => handleDeleted(todo.id)}
                  handleEdit={() => handleEdit(todo.id)}
                  handleClickTodo={() => handleClickTodo(todo.id)}
                  modalEdit={() => modalEdit(todo.id)}
                  clickedTodo={clickedTodo}
                  modalStatus={modalStatus}
                  modalClose={modalClose}
                />
              );
            })}
          </Ul>
        </Container>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  outline: none;
`;
const Container = styled.div`
  width: 480px;
  height: 650px;
  background-color: #ecf0f1;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  padding: 30px;
  box-sizing: border-box;
`;
const Ul = styled.ul`
  overflow: auto;
  width: 420px;
  height: 550px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default App;
