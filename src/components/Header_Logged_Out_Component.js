import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';

  const Header_Logged_Out_Component = (props) => {
  let mode = props.mode;
  console.log(mode)
  const navigate = useNavigate();
  
  return (
    <> 
    <nav className="navbar navbar-expand-lg taskorbitbg" style={{fontFamily: '"Nunito", sans-serif'}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-outline-light me-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <FontAwesomeIcon icon={faHomeLg} size="lg" style={{color: "#ffffff"}} />
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#" style={{color: 'white'}}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: 'white'}}>
                Contact Us
              </a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color: 'white'}}
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
            </li> */}
          </ul>
        
      <form className="d-flex justify-content-end ">

        {(mode == "signup")?<Link to = "/sign-in"><button className="btn btn-outline-light" type="submit">
          Sign In
        </button></Link>:null}
        {(mode == "signin")?<Link to="/sign-up"><button className="btn btn-outline-light" type="submit">
          Sign Up
        </button></Link>:null}
        {(mode == "home")?
        <div>
          <Link to = "/sign-in"><button className="btn btn-outline-light btn-block me-2" type="submit">
          Sign In 
        </button></Link>
        <Link to="/sign-up"><button className="btn btn-outline-light btn-block" type="submit">
        Sign Up
        </button></Link>
        </div>
        :null}

</form>
      </div>
    </nav>

    <Sidebar/>

    
  </>
  );
};

export default Header_Logged_Out_Component;
