import React from "react";

export default function HeaderFix() {
  return (
    <>
      <div
        style={{
          left: 0,
          right: 0,
          margin: "auto",
          // padding: "1%",
          textAlign: "center",
        }}
      >
        <a href="/">
          <img
            className="logoImage"
            alt="logo"
            src="/img/logo.png"
            width={"250"}
          />
        </a>
      </div>
    </>
  );
}
