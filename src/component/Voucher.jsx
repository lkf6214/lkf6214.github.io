import * as React from "react";
import VoucherHeader from "./VoucherHeader";
import Card from "react-bootstrap/Card";
import { Container } from "@mui/system";

export default function Voucher() {
  return (
    <>
      <div
        style={{
          // backgroundImage: "url(/img/bg_001.jpg)",
          background:
            "linear-gradient( 45deg, #fffffd,    rgb(83, 181, 63, 0.6), rgb(17, 167, 176,0.6) )",

          position: "relative",
          display: "table",
          width: "100%",
          height: "10rem",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "500",
            lineHeight: "1.5em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          바우처
        </div>
      </div>

      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2" style={{ margin: "2rem 0rem 0rem 0rem" }}>
            바우처 및 서비스 안내
          </Card.Header>
          <Card.Body>
            <VoucherHeader />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
