import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

const StyledDeleteButoon = styled.button`
  color: ${(props) => (props.user.username === 'test' ? 'blue' : 'red')};
`;

const StyledAddeButoon = styled(StyledDeleteButoon)`
  background-color: green;
`;

// Function 방식
const Home = (props) => {
  // 구조분할 할당(넘겨준 값이랑 key값의 이름이 같아야 한다.)
  const { boards, setBoards, number, setNumber, user, setUser } = props;

  return (
    <div>
      <h1>홈 : {number}</h1>
      <Button variant="primary">Primary</Button>{' '}
      <StyledAddeButoon user={user} onClick={() => setNumber(number + 1)}>
        번호 증가
      </StyledAddeButoon>
      <StyledDeleteButoon user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButoon>
      <button onClick={() => setUser({})}>이름 변경</button>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 : {board.title} / 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
