import React from 'react'


import Navbari from '../components/Header_Logged_Out_Component'
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';

const SignUpRouter = () => {

    return(
        <>
        <Navbari mode = "signup"></Navbari>
        <SignUp></SignUp>
        <Footer></Footer>
        </>       
    )
}

export default SignUpRouter;
