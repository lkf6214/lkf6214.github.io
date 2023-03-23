import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ActionAreaCard from "./component/ActionAreaCard";
import HomeProgram from "./component/HomeProgram";
import MainHeader from "./component/MainHeader";
import Header from "./component/VoucherHeader";
import Voucher from "./component/Voucher";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import ImageListSongpa from "./component/ImageListSongpa";
import ImageListWirye from "./component/ImageListWirye";
import VoucherListTotal from "./component/VoucherListTotal";
import Step from "./component/Step";
import Therapist from "./component/Therapist";
import HeaderFix from "./component/HeaderFix";
import Footer from "./component/Footer";

import Bar from "./component/Bar";
import Bar_2 from "./component/Bar_2";
import About from "./component/About";
import Greeting from "./component/Greeting";
import History from "./component/History";
import Information from "./component/Information";
import Program from "./component/Program";
import Location from "./component/Location";
import NotFound from "./component/NotFound";
import Navbar from "./component/Navbar";
import BootstrapNav from "./component/BootstrapNav";
import MyNavBar from "./component/MyNavBar";
import Home from "./component/Home";
import GlobalStyle from "./component/GlobalStyle";
import HomeProgram1 from "./component/HomeProgram1";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <HeaderFix />
        <BootstrapNav />

        {/* <Bar /> */}
        {/* <Bar_2 /> */}
        {/* <Navbar /> */}
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
      <Footer />
    </>
  );
}

export default App;
