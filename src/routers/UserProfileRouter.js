import React from 'react'

import Footer from '../components/Footer';
import Header_Logged_In_Component from '../components/Header_Logged_In_Component';
import UserProfile from '../components/UserProfile';

const UserProfileRouter = () => {
    


    return(
        <>
        <Header_Logged_In_Component/>
        <UserProfile/>
        <Footer></Footer>
        </>       
    )
}

export default UserProfileRouter;