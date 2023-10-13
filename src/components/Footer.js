import React from "react";
import "../css/style.css";

const Footer = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
        rel="stylesheet"
      />
      <div
        className="container-fluid p-2 text-white taskorbitbg"
        style={{ fontFamily: '"Nunito", sans-serif' }}
      >
        <footer className="container-fluid">
          <div className="d-flex flex-column justify-content-center flex-sm-row pt-4">
            <p>© 2023 TaskOrbit, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
