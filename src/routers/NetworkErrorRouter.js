import React from 'react'
import Header_Logged_Out_Component from '../components/Header_Logged_Out_Component'
import Header_Logged_In_Component from '../components/Header_Logged_In_Component'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import JobSection from '../components/JobSection';
import NetworkError from '../components/NetworkError';


const NetworkErrorRouter = () => {


    let mode = window.sessionStorage.getItem('Authorization') ? "signed-in" : "signed-out"

    return(
        <>
        {(mode === 'signed-in') ? <Header_Logged_In_Component></Header_Logged_In_Component> : <Header_Logged_Out_Component mode = "home"></Header_Logged_Out_Component>}
        
        {/* <HamburgerMenu/> */}
        <Sidebar/>
        <NetworkError/>
        <Footer></Footer>
        </>       
    )
}

export default NetworkErrorRouter;
