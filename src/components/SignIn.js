import React from 'react';


const SignIn = () => {
    return(
        <div className='container-fluid' style={{ width: 700, marginTop: 30 }}>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>
<form>
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
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="form2Example31"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="form2Example31">
          {" "}
          Remember me{" "}
        </label>
      </div>
    </div>
    <div className="col">
      {/* Simple link */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  {/* Submit button */}
  <button type="button" className="btn btn-primary btn-block mb-4">
    Sign in
  </button>
</form>


</div>
    )

}


export default SignIn;