import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "../Auth/Components/Dashboard";

const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default DashboardRouter;
