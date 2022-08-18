import React, { useState } from "react";
import commonlogo from "../../assets/commonIcons/page-icon.png";

const Register = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    user_type: "Select",
    token: "",
    password: "",
    confirm_password: "",
    checkbox: false,
  });

  const [isError, setIsError] = useState({
    username: "",
    email: "",
    user_type: "",
    token: "",
    password: "",
    confirm_password: "",
    checkbox: false,
  });

  const formValidate = (name, value) => {
    const emailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;

    let Error = { ...isError };
    switch (name) {
      case "username":
        Error.username =
          value.length < 4 ? "Atleast 4 characaters required" : "";
        break;
      case "email":
        Error.email = emailRegEx.test(value) ? "" : "Email address is invalid";
        break;
      case "user_type":
        Error.user_type = value === "Select" ? "Select a valid user type" : "";
        break;
      case "token":
        Error.token = value === "" ? "Enter a valid token" : "";
        break;
      case "password":
        Error.password =
          value.length < 6 ? "Atleast 6 characaters required" : "";
        break;
      case "confirm_password":
        Error.confirm_password =
          value !== isError.password ? "Passwords should be same" : "";
        break;
      default:
        break;
    }

    setIsError({ ...Error });
    // console.log(isError);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log(name," ",value);

    if (name == "checkbox") {
      setUserRegistration({ ...userRegistration, [name]: e.target.checked });
      formValidate(name, e.target.checked);
    } else {
      setUserRegistration({ ...userRegistration, [name]: value });
      formValidate(name, value);
    }
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    // console.log(name," ",value);
    formValidate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userRegistration);
  };

  return (
    <>
      <section className=" gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-around align-items-center h-100">
            <div className="col-12 col-sm-12 col-md-7 col-lg-5 col-xl-4 text-center">
              <div className="card gradient-custom-2 text-white">
                <div className="card-body  px-xl-10">
                  <div className="mb-md-0 mt-md-0">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">
                      Register
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className="form-inputs text-start mb-2">
                        <label className="form-label" htmlFor="username">
                          Name
                        </label>
                        <input
                          type="text"
                          id="username"
                          autoComplete="off"
                          value={userRegistration.username}
                          onChange={handleInput}
                          onBlur={handleOnBlur}
                          name="username"
                          className="form-control form-control-sm"
                        />
                        {isError.username.length > 0 && (
                          <span className="error">{isError.username}</span>
                        )}
                      </div>

                      <div className="form-inputs text-start mb-2">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="off"
                          value={userRegistration.email}
                          onChange={handleInput}
                          onBlur={handleOnBlur}
                          name="email"
                          className="form-control form-control-sm"
                        />
                        {isError.email.length > 0 && (
                          <span className="error">{isError.email}</span>
                        )}
                      </div>

                      <div className="form-inputs text-start mb-2">
                        <label className="form-label" htmlFor="user_type">
                          User Type
                        </label>
                        <select
                          className="form-select form-select-sm"
                          id="user_type"
                          value={userRegistration.user_type}
                          onChange={handleInput}
                          onBlur={handleOnBlur}
                          name="user_type"
                          aria-label="form-select-sm example"
                        >
                          <option defaultValue>Select</option>
                          <option value="1">Host</option>
                          <option value="2">Participant</option>
                        </select>
                        {isError.user_type.length > 0 && (
                          <span className="error">{isError.user_type}</span>
                        )}
                      </div>

                      <div className="form-inputs text-start mb-2">
                        <label className="form-label" htmlFor="token">
                          Token
                        </label>
                        <input
                          type="text"
                          id="token"
                          autoComplete="off"
                          value={userRegistration.token}
                          onChange={handleInput}
                          onBlur={handleOnBlur}
                          name="token"
                          className="form-control form-control-sm"
                        />
                        {isError.token.length > 0 && (
                          <span className="error">{isError.token}</span>
                        )}
                      </div>

                      <div className="form-inputs text-start mb-2">
                        <label className="form-label" htmlFor="pass">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          autoComplete="off"
                          value={userRegistration.password}
                          onChange={handleInput}
                          onBlur={handleOnBlur}
                          name="password"
                          className="form-control form-control-sm"
                        />
                        {isError.password.length > 0 && (
                          <span className="error">{isError.password}</span>
                        )}
                      </div>

                      <div className="form-inputs text-start mb-2">
                        <label
                          className="form-label"
                          htmlFor="confirm_password"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirm_password"
                          autoComplete="off"
                          value={userRegistration.confirm_password}
                          onChange={handleInput}
                          onBlur={handleOnBlur}
                          name="confirm_password"
                          className="form-control form-control-sm"
                        />
                        {isError.confirm_password.length > 0 && (
                          <span className="error">
                            {isError.confirm_password}
                          </span>
                        )}
                      </div>

                      <div className="form-check d-flex my-2 text-start">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value={userRegistration.checkbox}
                          onChange={handleInput}
                          id="checkbox"
                          name="checkbox"
                        />
                        <label
                          className={
                            isError.checkbox
                              ? "form-check-label text-danger"
                              : "form-check-lable"
                          }
                          htmlFor="checkbox"
                        >
                          I agree to the{" "}
                          <a href="#!" className="text-body">
                            <u className="text-info">FOCII Terms</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mt-3">
                        <button
                          type="submit"
                          className="btn btn-outline-light px-5"
                        >
                          Register
                        </button>
                      </div>
                      <div>
                        <p className="text-center mt-2 mb-0">
                          Already have an account?{" "}
                          <a href="/login" className="fw-bold text-body">
                            <u className="text-info">Login</u>
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 col-sm-9 col-md-7 col-lg-5 col-xl-4 text-center">
              <img
                src={commonlogo}
                className="img-fluid pt-2 pb-2"
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

export default Register;
