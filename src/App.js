import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Home from './routers/Home';
import SignUpRouter from './routers/SignUpRouter';
import SignInRouter from './routers/SignInRouter';
import TestRouter from './routers/TestRouter';
import Demo from './demo/Demo';
import SignOutRouter from './routers/SignOutRouter';
import UserProfileRouter from './routers/UserProfileRouter';
import JobDescriptionRouter from './routers/JobDescriptionRouter';




function App() {
    return (
      <div>
        <BrowserRouter>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sign-up' element={<SignUpRouter/>}/>
            <Route path='/sign-in' element={<SignInRouter/>}/>
            <Route path='/user/test' element={<TestRouter/>}/>
            <Route path='/demo' element={<Demo/>}/>
            <Route path='/profile' element={<UserProfileRouter/>}/>
            <Route path='/job/:id' element={<JobDescriptionRouter/>}/>
            
            {/* <Route path='/sign-out' element={<SignOutRouter/>}/> */}
        </Routes>

        </BrowserRouter>
      </div>
    )
}

export default App;
