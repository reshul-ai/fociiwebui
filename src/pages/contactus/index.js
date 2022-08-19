import React from "react";
import commonlogo from "../../assets/commonIcons/page-icon.png";

function ContactUs() {
  return (
    <>
      <section className="gradient-custom">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-around align-items-center h-100">
            <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 text-center">
              <img
                src={commonlogo}
                className="img-fluid p-2"
                alt="learning"
                style={{ width: 400 + "px" }}
              />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-5 col-xl-4 text-center">
              <div className="card gradient-custom-2 text-white">
                <div className="card-body ">
                  <div className="mb-md-2 mt-md-2">
                    <h2 className="fw-bold mb-2 text-uppercase">Let's Talk</h2>

                    <form>
                      <div className="form-outline text-start mb-4">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                        />
                        <p className="error"></p>
                      </div>

                      <div className="form-outline text-start mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-sm"
                        />
                        <p className="error"></p>
                      </div>
                      <div className="form-outline text-start mb-4">
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          id="tel"
                          className="form-control form-control-sm"
                        />
                        <p className="error"></p>
                      </div>
                      <div className="form-outline text-start mb-4">
                        <label className="form-label">
                          Select Type of Enquiry
                        </label>
                        <select
                          type="tel"
                          id="tel"
                          className="form-control form-control-sm"
                        >
                          <option>Beta Registration</option>
                          <option>Partnership</option>
                          <option>Press</option>
                          <option>Free Demo</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div className="form-outline text-start mb-4">
                        <label className="form-label">Message</label>
                        <textarea className="form-control form-control-sm" />
                        <p className="error"></p>
                      </div>

                      <div className="d-flex mb-2 justify-content-center">
                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
