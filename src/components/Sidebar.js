import React from 'react';
import {websiteThemeColor} from '../GlobalVariables.js'

const Sidebar = () => {
  return (
    <><div
    className="offcanvas offcanvas-start taskorbitbg"
    style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "250px",
      height: "100vh",
      overflowY: "auto",
      // zIndex: 1000,
      borderTopRightRadius:"10px"
    }}
    id="offcanvasSidebar"
  >
    <div className="offcanvas-header">
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div className="offcanvas-body" style={{backgroundColor:`${websiteThemeColor}`}}>
      <nav className="nav flex-column" style={{backgroundColor:`${websiteThemeColor}`}}>
        {/* <h6 style={{color:"white"}}>Major Job Sectors</h6> */}
        <h6 style={{color:"white"}}><a className="nav-link active" href="/" style={{color:"white"}}>
          Browse Jobs
        </a></h6>
        {/* <a className="nav-link" href="#" style={{color:"white"}}>
          Teaching
        </a>
        <a className="nav-link" href="#" style={{color:"white"}}>
          Bank/PO
        </a>
        <a className="nav-link" href="#" style={{color:"white"}}>
          Defence
        </a>
        <a className="nav-link" href="#" style={{color:"white"}}>
          SSC
        </a> */}
      </nav>
    </div>
  </div></>
  );
};

export default Sidebar;
