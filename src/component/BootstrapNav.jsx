import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">
          <h6 className="pt-1">
            성원언어임상연구소 (송파) 02-412-0505
            <br />
            성원언어심리센터 (위례) 031-757-0504
          </h6>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto p-2 my-lg-2 h5"> */}
          <Nav className="m-2 h5 ">
            <NavDropdown title="성원 소개" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about/greeting">인사말</NavDropdown.Item>
              <NavDropdown.Item href="/about/history">연혁</NavDropdown.Item>
              <NavDropdown.Item href="/about/therapist">
                연구원 소개
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/facilities">
                센터 전경
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/information">예약 안내</Nav.Link>
            <NavDropdown title="치료 프로그램" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="/program/step">치료과정</NavDropdown.Item> */}
              <NavDropdown.Item href="/program/language">
                언어치료
              </NavDropdown.Item>
              <NavDropdown.Item href="/program/cognitive">
                인지치료
              </NavDropdown.Item>
              <NavDropdown.Item href="/program/play">놀이치료</NavDropdown.Item>
              <NavDropdown.Item href="/program/counseling">
                성인상담
              </NavDropdown.Item>
              <NavDropdown.Item href="/program/group">
                그룹치료
              </NavDropdown.Item>
              <NavDropdown.Item href="/program/family">
                부모교육
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Voucher">바우처</Nav.Link>
            <Nav.Link href="/location">오시는 길</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
             
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
