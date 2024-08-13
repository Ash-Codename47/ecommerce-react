import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Auth/Components/Profile";

const ProfileRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </>
  );
};

export default ProfileRouter;
