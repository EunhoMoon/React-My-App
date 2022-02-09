import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용 하기 위해)

// styled-component => js파일과 css파일 관리에 용이하다.
const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>오시는길 : 서울특별시 강남구...</li>
        <li>전화번호 : 02) 1111 - 1111</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default Footer;
