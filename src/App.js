import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Home from "./routers/Home";
import SignUpRouter from "./routers/SignUpRouter";
import SignInRouter from "./routers/SignInRouter";
import TestRouter from "./routers/TestRouter";
import Demo from "./demo/Demo";
import SignOutRouter from "./routers/SignOutRouter";
import UserProfileRouter from "./routers/UserProfileRouter";
import JobDescriptionRouter from "./routers/JobDescriptionRouter";
import NetworkErrorRouter from "./routers/NetworkErrorRouter";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/network-error" element={<NetworkErrorRouter />} />
          <Route path="/sign-up" element={<SignUpRouter />} />
          <Route path="/sign-in" element={<SignInRouter />} />
          <Route path="/user/test" element={<TestRouter />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/profile" element={<UserProfileRouter />} />
          <Route path="/job/:id" element={<JobDescriptionRouter />} />
          <Route path="*" element={<NotFound/>} />
          {/* <Route path='/sign-out' element={<SignOutRouter/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
