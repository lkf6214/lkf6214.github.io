import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MyNavBar() {
  return (
    <NavBar>
      <Wrap>
        <SListItems>
          <SListAnchor to="/about">성원 소개</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/information">예약 안내</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/program">치료 프로그램</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/Voucher">바우처</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/location">오시는 길</SListAnchor>
        </SListItems>
      </Wrap>
    </NavBar>
  );
}

const NavBar = styled.ul`
  background-color: tomato;
  padding: 1rem;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SListItems = styled.li`
  list-style: none;
  width: 10rem;

  border: 1px solid black;
`;

const SListAnchor = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
