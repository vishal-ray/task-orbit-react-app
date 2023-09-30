import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import './image.png'


const Navbari = (props) => {
  const mode = props.mode;
  return (
      <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{fontFamily: '"Nunito", sans-serif'}}
    >
      <div className="container-fluid">
      <Link to="/" className="navbar-brand">
          Task Orbit
        </Link>
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
            <li className="nav-item" style={{ textDecoration: "none", borderBottomStyle: "none" }} >
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
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
          <div className="container-fluid" style={{ width: "100vh" }}>
            <form className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <form className="d-flex justify-content-end ">

            {(mode == "signup")?<Link to = "/sign-in"><button className="btn btn-outline-secondary" type="submit">
              Sign In
            </button></Link>:null}
            {(mode == "signin")?<Link to="/sign-up"><button className="btn btn-outline-secondary" type="submit">
              Sign Up
            </button></Link>:null}
            {(mode == "home")?
            <div>
              <Link to = "/sign-in"><button className="btn btn-outline-secondary me-2" type="submit">
              Sign In
            </button></Link>
            <Link to="/sign-up"><button className="btn btn-outline-secondary" type="submit">
            Sign Up
          </button></Link>
          </div>
          :null}
          </form>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbari;