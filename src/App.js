import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Payment from "./pages/payment/Payment";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import User from "./User";
import Navbar from "./common/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/*" element={<User />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
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
    </div>
  );
}

export default App;
