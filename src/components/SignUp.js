import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthService from '../serivces/AuthService';
import Swal from 'sweetalert2';
import {websiteThemeColor} from '/home/vishal_ray/task-orbit-react-app/src/GlobalVariables.js'

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
    <>
      
<div className="container mt-5" style={{marginBottom:150}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form>

                <div className="mb-3">
                  <input
                   type="text"
                   id="firstName" 
                   className="form-control" 
                   placeholder="First Name" 
                   value={firstName} 
                   onChange={(e)=>setFirstName(e.target.value)}
                   required />
                </div>

                <div className="mb-3">                
                  <input
                   type="text"
                   id="lastName" 
                   className="form-control" 
                   placeholder="Last Name" 
                   value={lastName} 
                   onChange={(e)=>setLastName(e.target.value)}
                   required />
                </div>
                
                <div className="mb-3">                 
                  <input 
                   type="emailid" 
                   id="email" 
                   className="form-control" 
                   placeholder="hello@gmail.com" 
                   name="email"
                   value={emailid}
                   onChange={(e)=>setEmailID(e.target.value)}
                   required/>
                </div>

                <div className="mb-3">                                  
                  <input
                   type="password" 
                   id="password" 
                   className="form-control" 
                   placeholder="Password"   
                   value={password}      
                   onChange={(e)=>setPassword(e.target.value)}
                   required />
                </div>

                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-primary" onClick={(e) => saveUser(e)}>
                    Sign Up
                  </button>
                </div>
 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
    )

}


export default SignUp;