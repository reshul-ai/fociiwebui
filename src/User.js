import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Home from "./pages/home/Home";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";

function User() {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default User;
