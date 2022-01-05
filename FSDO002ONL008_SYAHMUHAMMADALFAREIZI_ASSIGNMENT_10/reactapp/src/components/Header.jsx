import React from "react";
import "bootstrap";
function Header() {
  return (
    <>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <span className="fs-4 d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark tex-decoration-none fw-bold">
            React Assignment{" "}
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
