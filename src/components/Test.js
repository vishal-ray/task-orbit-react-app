import React,{useState} from "react";
import axios from "axios";

function Test()
{
    // const[res,setRes]=useState(null)
    let res = null;
    const token = window.sessionStorage.getItem("Authorization"); 
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.get("http://127.0.0.1:8080/user/test", config)
    .then(response=>{
      return response
    })

    axios.interceptors.response.use(function (response) {
      console.log('Axios response:', response.data);
      // res = response.data;
      return response;
    }, function (error) {
      console.log('Axios error:', error.data);
      return Promise.reject(error);
    });
    
      // console.log(res.data)

      if (!res) {
        return <div>Loading...</div>;
      }
    
      return <div><h1>a</h1></div>;
    };

  export default Test;