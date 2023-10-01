import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthService from '../serivces/AuthService';


const SignIn = () => {

  const[emailId,setEmailID] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate();

  const signin = (e) =>{
    const user = {emailId,password}
    AuthService.signInUser(user).then((response) =>{
      console.log(response.data)
      window.sessionStorage.setItem('Authorization',response.data.jwtToken)
      navigate("/")
    }).catch(error =>{
      console.log(error)
    })
  }
    return(
        <div className='container-fluid' style={{ width: 700, marginTop: 100 }}>

<form>
  {/* Email input */}
  <div className="form-outline mb-4 pt-100">
    <input type="email" id="form2Example1" className="form-control" placeholder='Email ID'
    value={emailId}
    onChange={(e)=>setEmailID(e.target.value)}
    required/>
    
  </div>
  {/* Password input */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" placeholder='Password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    required/>
    <label className="form-label" htmlFor="form2Example2">
      Password
    </label>
  </div>
  {/* 2 column grid layout for inline styling */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* Checkbox */}
    </div>
    <div className="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  {/* Submit button */}
  <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e)=> signin(e)}>
    Sign in
  </button>
</form>


</div>
    )

    // return(
    //   <>
      
    //   </>
    // )
}


export default SignIn;