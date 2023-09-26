import React from 'react'


import Navbari from '../components/Navbar'
import Footer from '../components/Footer';
import Test from '../components/Test';

const TestRouter = () => {

    return(
        <>
        <Navbari mode = "signup"></Navbari>
        <Test/>
        <Footer></Footer>
        </>       
    )
}

export default TestRouter;
