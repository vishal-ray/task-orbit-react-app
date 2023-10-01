import React from "react"

const Footer = () => {
    return(
      <div>
            <link
  href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
  rel="stylesheet"
/>
{/* style={{fontFamily: '"Nunito", sans-serif'}} */}
      <div className="container-fluid fixed-bottom p-2 text-white taskorbitbg" style={{fontFamily: '"Nunito", sans-serif', backgroundColor:"#2A679C"}}>
        <footer className="container">
          
          <div className="d-flex flex-column flex-sm-row justify-content-center pt-4 ">
            <p>© 2023 TaskOrbit, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
    
    );
};

export default Footer;