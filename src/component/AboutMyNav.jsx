import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// tetz, 배경색 변경을 위한 css 파일 추가
import "../css/AboutMyNav.css";

export default function AboutMyNav() {
  const [active, setActive] = useState(1);

  return (
    <>
      <NavBar>
        <Wrap>
          <ListItems
            // tetz, to 다음 주소 값에 "/greeting" 같은 형식이 되면 해당 페이지의 기본 주소 localhost:3000/ 뒤에 적어준 주소가 붙습니다!
            // 지금은 about 이라는 주소 다음에 greeting 이 붙어야 하니까 앞에 / 를 빼주시면, 현재 주소 뒤에 to 에 넣어준 주소가
            // 추가 되기 때문에 / 만 다 빼주시면 됩니다~!
            to="greeting"
            // 요건 useState 로 선언한 state 의 값에 따라서 변하는 class 를 가지도록 만든 코드 입니다~!
            // 해당 영역을 클릭하면 각 영역 번호(1~5)가 들어가게 되구요, 해당 번호에 맞는 영역은 active 라는 class 명을 가지게 됩니다
            // 클릭이 안된 영역은 not 이라는 클래스를 가지게 되구요
            // 위에 import 한 css 파일을 보시면 active 라는 클래스를 가지면 오랜지 색으로 배경색이 변경 되도록 해두었기 때문에
            // 배경색이 변화 합니다~!
            // 크리고 setActive, 즉 상태 변경 함수로 active 라는 상태 변경 값이 변경되면 컴포넌트가 리랜더링이 되므로
            // 색 변화가 바로 반영 됩니다~!
            onClick={() => setActive(1)}
            className={active === 1 ? "active" : "not"}
          >
            <SListAnchor>인사말</SListAnchor>
          </ListItems>
          <ListItems
            to="history"
            className={active === 2 ? "active" : "not"}
            onClick={() => setActive(2)}
          >
            <SListAnchor>연혁</SListAnchor>
          </ListItems>
          <ListItems
            to="Therapist"
            className={active === 3 ? "active" : "not"}
            onClick={() => setActive(3)}
          >
            <SListAnchor>연구원 소개</SListAnchor>
          </ListItems>
          <ListItems
            to=""
            className={active === 4 ? "active" : "not"}
            onClick={() => setActive(4)}
          >
            <SListAnchor>센터 전경</SListAnchor>
          </ListItems>
          <ListItems
            to="location"
            className={active === 5 ? "active" : "not"}
            onClick={() => setActive(5)}
          >
            <SListAnchor>오시는 길</SListAnchor>
          </ListItems>
        </Wrap>
      </NavBar>
    </>
  );
}

const NavBar = styled.ul`
  background-color: #e0dbbb;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ListItems = styled(Link)`
  width: 10rem;
  padding: 1rem;
  /* border: 2px solid #c8c8c8; */
  border-radius: 2rem;

  text-decoration: none;
`;

const SListAnchor = styled.div`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
`;
