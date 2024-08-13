import React from "react";
import { Route, Routes } from "react-router-dom";
import CoreRouter from "../Core/Router/CoreRouter";
import AuthRouter from "../Auth/routers/AuthRouter";
import DashboardRouter from "../Dashboard/DashboardRouter";
import ProfileRouter from "../Profiles/ProfileRouter";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoreRouter />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/dashboard/*" element={<DashboardRouter />} />
        <Route path="/profile/*" element={<ProfileRouter />} />
        {/* Add your routes here */}
      </Routes>
    </>
  );
};

export default index;
