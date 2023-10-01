import React from 'react';
import JobSection from './JobSection';

const Sidebar = () => {
  return (
    <><div
    className="offcanvas offcanvas-start"
    style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "250px",
      height: "100vh",
      backgroundColor: "white",
      overflowY: "auto",
      // zIndex: 1000,
      borderTopRightRadius:"10px"
    }}
    id="offcanvasSidebar"
  >
    <div className="offcanvas-header">
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <nav class="nav flex-column">
        <a class="nav-link active" href="#">
          Home
        </a>
        <a class="nav-link" href="#">
          About
        </a>
        <a class="nav-link" href="#">
          Contact
        </a>
      </nav>
    </div>
  </div></>
  );
};

export default Sidebar;
