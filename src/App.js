import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Payment from "./pages/payment/Payment";
import Login from "./pages/auth/login";
import InstructorLogin from "./pages/auth/instructor/login";
import InstructorRegister from "./pages/auth/instructor/register";
import BussinessLogin from "./pages/auth/bussiness/login";
import BussinessRegister from "./pages/auth/bussiness/register";

import StudentLogin from "./pages/auth/student/login";
import StudentRegister from "./pages/auth/student/register";

import Register from "./pages/auth/register";
import User from "./User";
import Navbar from "./common/navbar/Navbar";
import ContactUs from "./pages/contactus";
import Pricing from "./pages/pricing";
import Footer from "./common/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/*" element={<User />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/instructor-login" element={<InstructorLogin />} />
          <Route
            exact
            path="/instructor-register"
            element={<InstructorRegister />}
          />
          <Route exact path="/bussiness-login" element={<BussinessLogin />} />
          <Route
            exact
            path="/bussiness-register"
            element={<BussinessRegister />}
          />
          <Route exact path="/student-login" element={<StudentLogin />} />
          <Route exact path="/student-register" element={<StudentRegister />} />

          {/* <Route exact path="/auth" element={<Auth />} /> */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
