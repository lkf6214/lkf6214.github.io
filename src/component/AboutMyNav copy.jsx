import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function AboutMyNav() {
  return (
    <NavBar>
      <Wrap>
        <SListItems>
          <SListAnchor to="/about">인사말</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/history">연혁</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/program">연구원 소개</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/Voucher">센터 전경</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/location">오시는 길</SListAnchor>
        </SListItems>
      </Wrap>
    </NavBar>
  );
}

const NavBar = styled.ul`
  background-color: #e5d996;
  /* padding: 1rem; */

  border: 2px solid gray;
  border-radius: 2rem;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SListItems = styled(Link)`
  list-style: none;
  width: 10rem;
  padding: 1rem;
  border: 1px solid black;
  text-decoration: none;
  /* border-radius: 2rem; */
`;

const SListAnchor = styled.div`
  text-decoration: none;
  color: #fff;
`;
