import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Profile from "../Components/Profile";
import Register2 from "../Components/Register2";
import Login2 from "../Components/Login2";

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default AuthRouter;
