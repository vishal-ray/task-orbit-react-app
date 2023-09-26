import React from 'react'
import Navbari from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {

    return(
        <>
        <Navbari mode = "home"></Navbari>
        <Sidebar></Sidebar>
        <Footer></Footer>
        </>       
    )
}

export default Home;
