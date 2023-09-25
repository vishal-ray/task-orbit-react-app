import React, { StrictMode } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Home from './routers/Home';
import SignUpRouter from './routers/SignUpRouter';
import SignInRouter from './routers/SignInRouter';
// import JobSection from './components/JobSection';


function App() {
    return (
      <div>
        <BrowserRouter>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sign-up' element={<SignUpRouter/>}/>
            <Route path='/sign-in' element={<SignInRouter/>}/>
        </Routes>

        </BrowserRouter>
      </div>
    )
}

export default App;