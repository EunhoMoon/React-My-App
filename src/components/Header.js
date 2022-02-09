import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용 하기 위해)

// styled-component => js파일과 css파일 관리에 용이하다.
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledHeadLink = styled(Link)`
  color: red;
`;

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/'} className="nav-link">
              홈
            </Link>
            <Link to={'/login/10'} className="nav-link">
              로그인
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <StyledHeaderDiv backgroundColor={'blue'}>
        <ul>
          <li>
            <StyledHeadLink to={'/'}>홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to={'/login/10'}>로그인</StyledHeadLink>
          </li>
        </ul>
      </StyledHeaderDiv>
    </div>
  );
};

export default Header;
