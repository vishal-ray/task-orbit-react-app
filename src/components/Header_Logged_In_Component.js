import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router';
import Sidebar from './Sidebar';

  const Header_Logged_In_Component = (props) => {
  let mode = props.mode;
  
  console.log(mode)
  const navigate = useNavigate();
  const signout = (e) =>{
    window.sessionStorage.clear()
    navigate("/")
  }
  
  return (
    <> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
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
        <input
          type="search"
          className="form-control me-2"
          style={{ width: '300px' }}
          placeholder="Search"
          aria-label="Search"
        />
        <form className="d-flex justify-content-end ">
        <button className="btn btn-outline-secondary" type="submit" onClick={(e)=>signout(e)}>
          Sign Out
          </button>
        </form>
      </div>
    </nav>

    <Sidebar/>
    </>
    
  );
};

export default Header_Logged_In_Component;
