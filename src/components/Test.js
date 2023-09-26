import axios from 'axios';
import React from 'react';

// const client = axios.create({
//     baseURL: "http://127.0.0.1:5000/user" 
//   });

function Test()
{
    // debugger;
    const token = window.sessionStorage.getItem("Authorization"); 
    const data = {token}
    console.log(token)
    // axios.defaults.headers.common['Authorization'] = token;
    // axios.create
    axios.get("http://127.0.0.1:5000/user/test", { headers: { Authorization: token,Origin: "http://localhost:3000"
} })
    .then(response =>{
        console.log("Success")
    })
    .catch(error=>{
        console.log("error")
    })
    // const res = client.get("/test").then(response =>{
    //     console.log("Success")
    // }).catch(error=>{
    //     console.log(error)
    // })
    

// const url = 'http://127.0.0.1:5000/user/test';

// // Set the token obtained after authentication


// // Define headers
// const headers = {
//   'Authorization': `Bearer ${token}`,
//   'Content-Type': 'application/json',
// };

// // Make the GET request
// axios.get(url, { headers })
//   .then(response => {
//     // Handle the response from the API
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });

    return <div>{res}</div>
}   




// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// function Test() {
//     const [response, setResponse] = useState(null);

//     useEffect(() => {
//         const token = 'Bearer '.concat(window.sessionStorage.getItem("Authorization"));
//         console.log(token);

//         axios.get("http://127.0.0.1:5000/user/test", { headers: { Authorization: token } })
//             .then(response => {
//                 console.log("Success");
//                 setResponse(response.data); // Update the state with the response data
//             })
//             .catch(error => {
//                 console.log(error);
//                 setResponse(error.response.data); // Update the state with the error response data
//             });
//     }, []);

//     return <div>{response}</div>
// }

export default Test;