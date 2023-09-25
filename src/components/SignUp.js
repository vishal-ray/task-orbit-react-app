import React from 'react';


const SignUp = () => {
    return(
        <div className='container-fluid' style={{ width: 700, marginTop: 30 }}>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>
<form>
<div className="form-outline mb-4 pt-100">
    <input type="text" id="firstName" className="form-control" />
    <label className="form-label" htmlFor="firstName">
      First Name
    </label>
  </div>
  <div className="form-outline mb-4 pt-100">
    <input type="text" id="lastName" className="form-control" />
    <label className="form-label" htmlFor="lastName">
      Last Name
    </label>
  </div>
  {/* Email input */}
  <div className="form-outline mb-4 pt-100">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">
      Email address
    </label>
  </div>
  {/* Password input */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">
      Password
    </label>
  </div>
  {/* 2 column grid layout for inline styling */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* Checkbox */}
      <button type="button" className="btn btn-primary btn-block mb-4">
    Sign up
     </button>
      </div>
    
  </div>
  {/* Submit button */}
  
</form>


</div>
    )

}


export default SignUp;