import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Voucher from "./component/Voucher";
import HeaderFix from "./component/HeaderFix";
import Footer from "./component/Footer";
import About from "./component/About";
import Information from "./component/Information";
import Program from "./component/Program";
import Location from "./component/Location";
import NotFound from "./component/NotFound";
import BootstrapNav from "./component/BootstrapNav";
import Home from "./component/Home";
import GlobalStyle from "./component/GlobalStyle";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: white;
    padding: 1rem 0rem;
    width: 100%;
    box-sizing: border-box;
  `;

  return (
    <>
      <Container fixed>
        <GlobalStyle />
        <Router>
          <HeaderFix />
          <BootstrapNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/information" element={<Information />} />
            <Route path="/program/*" element={<Program />} />
            <Route path="/voucher" element={<Voucher />} />
            <Route path="/location/*" element={<Location />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
