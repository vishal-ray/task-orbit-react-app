import React from 'react'


import Navbari from '../components/Navbar'
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
