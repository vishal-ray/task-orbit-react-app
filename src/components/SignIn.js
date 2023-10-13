import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../serivces/AuthService";

const SignIn = () => {
  const [emailId, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    console.log("s");
    const user = { emailId, password };
    console.log(user);
    AuthService.signInUser(user)
      .then((response) => {
        console.log(response.data);
        window.sessionStorage.setItem("Authorization", response.data.jwtToken);
        navigate("/");
      })
      .catch((error) => {
        if(error.message == "Network Error")
        {
          navigate("/network-error")
          return;
        }
          
        document.getElementById("res_box").innerHTML = error.response.data;
        document.getElementById("res_box").style.color = "red";
        console.log(error);
      });
  };

  return (
    <div className="container mt-5" style={{ marginBottom: 184 }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4 taskorbit-text">
                Sign In
              </h2>
              <form onSubmit={(e) => signin(e)}>
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="hello@gmail.com"
                    name="email"
                    value={emailId}
                    onChange={(e) => setEmailID(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
                <br />
                <div id="res_box" className="text-align-center"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
