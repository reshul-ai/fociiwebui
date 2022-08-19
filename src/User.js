import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Home from "./pages/home/Home";
import Payment from "./pages/payment/Payment";
import BussinessProfile from "./pages/profile/BussinessProfile";
import Profile from "./pages/profile/Profile";
import StudentProfile from "./pages/profile/StudentProfile";

function User() {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/bussiness-profile" element={<BussinessProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default User;
