import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupUniseed from "./Signup/Signup";
import LoginUniseed from "./Login/Login";
import ConnectionUniseed from "./Connection";

function App() {

  return (
      <Routes>
        <Route path="/signup" element={<SignupUniseed />} />
        <Route path="/login" element={<LoginUniseed />} />
        <Route path="/connection" element={<ConnectionUniseed />} />
      </Routes>
  );
}

export default App;
