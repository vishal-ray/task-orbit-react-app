import React from 'react'


import Navbari from '../components/Navbar'
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
