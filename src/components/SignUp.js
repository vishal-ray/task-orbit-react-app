import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../serivces/AuthService";

const SignUp = () => {
  const [name, setName] = useState("");
  const [emailid, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = (e) => {
    e.preventDefault();
    const user = { name, emailid, password };
    AuthService.createUser(user)
      .then((response) => {
        console.log("User Data Sent");
        // let res = JSON.parse(response.data);
        console.log(response);
        // Swal.fire(
        //   "Verification Email sent to your Email!",
        //   "Kindly click on validation link in your email to access your account!",
        //   "success"
        // );
        
        document.getElementById("res_box").innerHTML = "Verification Email sent to your Email! Kindly click on validation link in your email to access your account!"
        document.getElementById("res_box").style.color = "green";

        setTimeout(nav,5000)
        function nav()
        {
          navigate("/");
        }
      })
      .catch((error) => {
        if(error.message == "Network Error")
        {
          navigate("/network-error")
          return;
        }
        console.log(error);
        // Swal.fire(error.response.data,"Failure")
        document.getElementById("res_box").innerHTML = error.response.data;
        document.getElementById("res_box").style.color = "red";
      });
  };

  return (
    <>
      <div className="container mt-5" style={{ marginBottom: 150 }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Sign Up</h2>
                <form onSubmit={(e) => saveUser(e)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="your-email@gmail.com"
                      name="email"
                      value={emailid}
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
                      Sign Up
                    </button>
                  </div>
                  <br/>
                  <div id="res_box" className="text-align-center"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
