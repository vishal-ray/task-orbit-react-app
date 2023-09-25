import React from 'react';
import JobSection from './JobSection';

const Sidebar = () => {
  return (
    <div className="container-fluid" style= {{backgroundColor: "#d1d9e3"}}>
      <div className="row">
        <nav
          className="col-md-3 col-lg-2 d-md-block sidebar"
          style={{backgroundColor: "#d1d9e3", borderRight:"0.001px solid gray 50%"}}
        >
          <a
            className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            href="/"
          >
            <svg className="bi pe-none me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4 text-dark">Sidebar</span>
          </a>
          <hr className="text-dark" />
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <svg className="bi pe-none me-2" width={16} height={16}>
                  <use xlinkHref="#home" />
                </svg>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <svg className="bi pe-none me-2" width={16} height={16}>
                  <use xlinkHref="#speedometer2" />
                </svg>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <svg className="bi pe-none me-2" width={16} height={16}>
                  <use xlinkHref="#table" />
                </svg>
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <svg className="bi pe-none me-2" width={16} height={16}>
                  <use xlinkHref="#grid" />
                </svg>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <svg className="bi pe-none me-2" width={16} height={16}>
                  <use xlinkHref="#people-circle" />
                </svg>
                Customers
              </a>
            </li>
          </ul>
          <hr />
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
          {/* Content goes here */}
          <JobSection></JobSection>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
