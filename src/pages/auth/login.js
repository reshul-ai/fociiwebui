import React, { useState } from "react";
import companylogo from "../../assets/navbar/BALogo.png";
import commonlogo from "../../assets/commonIcons/page-icon.png";

const Login = () => {
  const [eye, seteye] = useState(true);
  const [pass, setpass] = useState("password");

  const Eye = () => {
    if (pass === "password") {
      setpass("text");
      seteye(false);
    } else {
      setpass("password");
      seteye(true);
    }
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const emailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
    if (emailRegEx.test(email)) {
      setMessage("");
    } else {
      setMessage("Invalid email");
    }
  };

  return (
    <>
      <section className="gradient-custom">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-around align-items-center h-100">
            <div className="col-sm-12 col-md-7 col-lg-5 col-xl-4 text-center">
              <div className="card gradient-custom-2 text-white">
                <div className="card-body ">
                  <div className="mb-md-2 mt-md-2">
                    <h2 className="fw-bold mb-2 text-uppercase">LogIn</h2>

                    <form>
                      <div className="form-outline text-start mb-4">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-sm"
                          onBlur={emailValidation}
                          onFocus={() => setMessage("")}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="error">{message}</p>
                      </div>

                      <div className="form-outline text-start">
                        <label className="form-label" htmlFor="pass">
                          Password
                        </label>
                        <div className="input-group">
                          <input
                            type={pass}
                            id="pass"
                            className="form-control form-control-sm border-end-0"
                          />
                          <span className="input-group-text  bg-white">
                            <i
                              onClick={Eye}
                              style={{
                                cursor: "pointer",
                                color: "black",
                                height: "auto",
                              }}
                              className={`fa ${
                                eye ? "fa-eye-slash" : "fa-eye"
                              }`}
                            ></i>
                          </span>
                        </div>
                        <p className="error"></p>
                      </div>

                      <div className="text-end mt-2">
                        <p className="small pb-lg-2">
                          <a className="text-info" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </div>

                      <div className="d-flex mb-2 justify-content-center">
                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="text-white">
                    <p className="mt-3 mb-0">
                      Don't have an account?{" "}
                      <a href="/register" className="fw-bold text-body">
                        <u className="text-info">Register</u>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 text-center">
              <img
                src={commonlogo}
                className="img-fluid p-2"
                alt="learning"
                style={{ width: 400 + "px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
