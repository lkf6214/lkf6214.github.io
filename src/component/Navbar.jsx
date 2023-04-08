import Nav from "react-bootstrap/Nav";

function JustifiedExample() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">인사말</Nav.Link>
        ㄴㄴㄴㄴㄴㄴㄴ
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">연혁</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">연구원 소개</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">센터 전경</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default JustifiedExample;
