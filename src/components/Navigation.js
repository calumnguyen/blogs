import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Nav>
      <h5>Gon Da Thanh</h5>
      <ul>
        <li>Resume</li>
        <li>Blogs</li>
      </ul>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  margin: auto;
  min-height: 10vh;
  padding: 1rem 10rem;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: #54e346;
    }
  }
`;

export default Navigation;
