import React from 'react'
import Navbari from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import JobSection from '../components/JobSection';
import HamburgerMenu from '../components/Hamburger';

const Home = () => {

    return(
        <>
        <Navbari mode = "home"></Navbari>
        {/* <HamburgerMenu/> */}
        <JobSection/>
        <Footer></Footer>
        </>       
    )
}

export default Home;
