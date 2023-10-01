import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthService from '../serivces/AuthService';
import Swal from 'sweetalert2';

const SignUp = () => {

  const[firstName,setFirstName] = useState('') 
  const[lastName,setLastName] = useState('')
  const[emailid,setEmailID] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate();

  const saveUser = (e) =>{
    const user = {firstName,lastName,emailid,password}
    AuthService.createUser(user).then((response)=>
    {
      console.log("User Data Sent")
      console.log(response.data)
      Swal.fire("Verification Email sent to your Email!", "Kindly click on validation link in your email to access your account!", "success");
      navigate("/")
    }).catch(error =>{
      console.log(error)
    })
  }

  return(
        <div className='container-fluid' style={{ width: 700, marginTop: 75, marginBottom:150 }}>

<form>
<div className="form-outline mb-4 pt-100">
    <input type="text" id="firstName" className="form-control" placeholder="First Name" 
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      required />
    
  </div>
  <div className="form-outline mb-4 pt-100">
    <input type="text" id="lastName" className="form-control "placeholder="Last Name"
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      required />
    
  </div>
  
  {/* EmailID input */}
  <div className="form-outline mb-4 pt-100">
    <input type="emailid" id="form2Example1" className="form-control" placeholder="hello@gmail.com" 
      value={emailid}
      onChange={(e)=>setEmailID(e.target.value)}
      required/>
    
  </div>
  {/* Password input */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" placeholder="Password" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      required />
    
  </div>
  {/* 2 column grid layout for inline styling */}
    <div className=" row mb-4 d-grid gap-2 col d-flex justify-content-center">
      <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e) => saveUser(e)}>
    Sign up
     </button>
      </div>

</form>
</div>
    )

}


export default SignUp;