import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import companylogo from "../../assets/navbar/BALogo.png";
import "./navbar.css";

const Navbar = () => {
  const [login, setlogin] = useState(false);
  const [register, setregister] = useState(false);

  useEffect(() => {
    console.log(window.location.pathname);

    if (window.location.pathname === "/") {
      setregister(true);
      setlogin(true);
    }
    if (window.location.pathname === "/login") {
      setregister(true);
      // setlogin(true);
    }
    if (window.location.pathname === "/register") {
      // setregister(true);
      setlogin(true);
    }
    return () => {};
  }, []);

  return (
    <div className="container-fluid" id="mainNav">
      <div className="row">
        <div
          className={
            login && register ? "col-lg-8 col-sm-12" : "col-lg-9 col-sm-12"
          }
          style={{ padding: "10px" }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              href="/"
              className="col-md-2"
              id="page-logo-div"
              style={{ userSelect: "none", cursor: "pointer" }}
            >
              <img
                src={companylogo}
                width="120px"
                height="120px"
                alt="Company Logo"
                className="img img-fluid"
              />
            </a>
            <a
              href="/"
              className="col-md-1 pt-3"
              style={{
                userSelect: "none",
                cursor: "pointer",
                fontStyle: "none",
                textDecoration: "none",
              }}
            >
              <p id="page-heading">FOCII</p>
            </a>
          </div>
        </div>
        <div
          className={
            login && register ? "col-lg-4 col-sm-12" : "col-lg-3 col-sm-12"
          }
          style={{ padding: "10px" }}
        >
          <div
            className="row"
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            {login && (
              <div className="col" style={{ margin: "auto" }}>
                <a href="/login" className="btn btn-light" id="header-button">
                  Login
                </a>
              </div>
            )}
            {register && (
              <div className="col" style={{ margin: "auto" }}>
                <a
                  href="/register"
                  className="btn btn-light"
                  id="header-button"
                >
                  Register
                </a>
              </div>
            )}
            <div
              className={login || register ? "col" : "col-6"}
              style={{ margin: "auto" }}
            >
              <a
                href="http://braina.live/contact.php"
                target="_blank"
                className="btn btn-light"
                id="header-button"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <a
          href="/"
          className="col-md-2"
          id="page-logo-div"
          style={{ userSelect: "none", cursor: "pointer" }}
        >
          
            <img
              src={companylogo}
              width="100px"
              height="100px"
              alt="Company Logo"
              className="img img-fluid"
            />
         
        </a>
        <a
          href="/"
          className="col-md-1 pt-3"
          style={{
            userSelect: "none",
            cursor: "pointer",
            fontStyle: "none",
            textDecoration: "none",
          }}
        >
          <p id="page-heading">FOCII</p>
        </a>
        <div className="col-md-5"></div>
        <div className="col pt-4">
          <a href="/login" className="btn btn-light" id="header-button">
            Login
          </a>
        </div>
        <div className="col pt-4">
          <a href="/register" className="btn btn-light" id="header-button">
            Register
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
