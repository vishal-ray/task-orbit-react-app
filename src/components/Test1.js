import axios from 'axios';
import React from 'react';

// const client = axios.create({
//     baseURL: "http://127.0.0.1:5000/user" 
//   });

async function Test1()
{
    // debugger;
    const token = window.sessionStorage.getItem("Authorization"); 
    const data = {token}
    // console.log(token)
    // axios.defaults.headers.common['Authorization'] = token;
    // axios.create
    // const baseURL = "/user/test"
    // axios.create({
    //     baseURL: baseUR,
    //     headers: {
    //         'Content-Type':'application/json',
    //         'Authorization': `Bearer ${token}`
    //     },
    //     credentials:true,
    // })

    const header =  {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
                // 'origin': "http://localhost:3000",
                // 'Accept-Encoding':
                // `gzip, deflate, br`,
                // 'Accept-Language':
                // `en-US,en;q=0.9,hi;q=0.8`,
                // 'Access-Control-Request-Headers':
                // `authorization`,
                // 'Access-Control-Request-Method':
                // `GET`,
                // 'Connection':
                // `keep-alive`,
                // 'Host':
                // `127.0.0.1:8080`,
                // 'Sec-Fetch-Dest':
                // `empty`,
                // 'Sec-Fetch-Mode':
                // `cors`,
                // 'Sec-Fetch-Site':
                // `cross-site`
            }


    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    let res = null;


    await axios.get("http://127.0.0.1:8080/user/test")
    .then(response=>{
        console.log(response.data +"e")
        res = <div>{response.data}</div>
    })
    
    console.log(res)

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
console.log(res + " end")

    return(
        <>
         {res}
         </>
    )
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

export default Test1;