import React from "react";
import { Link } from "react-router-dom";

export default function HeaderFix() {
  return (
    <>
      <div
        style={{
          left: 0,
          right: 0,
          margin: "auto",
          padding: "1%",
          textAlign: "center",
        }}
      >
        <a href="/">
          {/* <Link to="/"> */}
          <img
            className="logoImage"
            alt="logo"
            src="/img/logo.png"
            width={"300"}
          />
          {/* </Link> */}
        </a>
      </div>
    </>
  );
}
