import React from 'react'
import Footer from '../components/Footer';
import JobDescription from '../components/JobDescription';
import Header_Logged_In_Component from '../components/Header_Logged_In_Component';
import Header_Logged_Out_Component from '../components/Header_Logged_Out_Component';

const JobDescriptionRouter = () => {

    let mode = window.sessionStorage.getItem('Authorization') ? "signed-in" : "signed-out"

    return(
        <>
        {(mode === 'signed-in') ? <Header_Logged_In_Component></Header_Logged_In_Component> : <Header_Logged_Out_Component mode = "home"></Header_Logged_Out_Component>}
        <JobDescription/>
        <Footer></Footer>
        </>       
    )
}

export default JobDescriptionRouter;
