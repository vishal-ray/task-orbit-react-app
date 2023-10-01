import React from 'react'


import Navbari from '../components/Header_Logged_Out_Component'
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';

const SignInRouter = () => {

    return(
        <>
        <Navbari mode = "signin"></Navbari>
        <SignIn></SignIn>
        <Footer></Footer>
        </>       
    )
}

export default SignInRouter;
