import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">성원언어심리센터</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center">
            <NavDropdown title="성원 소개" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">인사말</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">연혁</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                연구원 소개
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                센터 둘러보기
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">예약 안내</Nav.Link>
            <NavDropdown title="치료 프로그램" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">치료과정</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">언어치료</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">놀이치료</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">성인상담</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">인지치료</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                사회성 그룹치료
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing">바우처</Nav.Link>
            <Nav.Link href="#features">오시는 길</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
