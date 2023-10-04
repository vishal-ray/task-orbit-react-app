import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthService from '../serivces/AuthService';
import {websiteThemeColor} from '/home/vishal_ray/task-orbit-react-app/src/GlobalVariables.js'

const SignIn = () => {
  const[emailId,setEmailID] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate();

  const signin = (e) =>{
    console.log("s")
    const user = {emailId,password}
    console.log(user)
    AuthService.signInUser(user).then((response) =>{
      console.log(response.data)
      window.sessionStorage.setItem('Authorization',response.data.jwtToken)
      navigate("/")
    }).catch(error =>{
      console.log(error)
    })
  }

    return(
      <div className="container mt-5" style={{marginBottom:184}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4 taskorbit-text" >Sign In</h2>
              <form>
                
                <div className="mb-3">
                  
                  <input 
                   type="emailid" 
                   id="email" 
                   className="form-control" 
                   placeholder="hello@gmail.com" 
                   name="email"
                   value={emailId}
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
                <button type="button" className="btn btn-primary" onClick={(e) => signin(e)}>
                  Sign In
                </button>
</div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

}


export default SignIn;