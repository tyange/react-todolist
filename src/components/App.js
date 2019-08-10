import React from "react";
import styled from "styled-components";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Container>
          <TodoInput />
          <TodoList />
        </Container>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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

export default App;
