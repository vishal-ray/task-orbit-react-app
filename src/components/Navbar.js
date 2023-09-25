import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';


const Navbari = () => {
  return (
      <nav
      className="navbar navbar-expand-lg bg-body-secondary"
    >
      <div className="container-fluid">
      <Link to="/"><a className="navbar-brand" href="#">
          Task Orbit
        </a></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/"><a className="nav-link active" aria-current="page" href="#">
                Home
              </a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="container-fluid" style={{ width: "fit-content" }}>
            <form className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
          <form className="d-flex justify-content-end ">
            <Link to="/sign-up"><button className="btn btn-outline-secondary me-2" type="submit">
              Sign Up
            </button></Link>
            <Link to = "/sign-in"><button className="btn btn-outline-secondary" type="submit">
              Sign In
            </button></Link>
          </form>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbari;