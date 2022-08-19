import React from "react";
import commonlogo from "../../assets/commonIcons/page-icon.png";
import "./index.css";
function Pricing() {
  return (
    <section className="container fluid" style={{ marginTop: "50px" }}>
      <div
        className="row"
        style={{ display: "flex", flexDirection: "row", height: "100%" }}
      >
        <div className="col-sm-9">
          <div
            className="row"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="col">
              <div
                style={{
                  border: "1px solid white",
                  padding: "12px",
                  borderRadius: "10px",
                  textAlign: "center",
                  color: "white",
                  height: "100%",
                }}
              >
                <h2>Free Trail</h2>
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <span>$</span>
                  <h1 style={{ color: "#07fc03" }}>0</h1>
                </div>
                <div>per month</div>
                <div
                  style={{
                    width: "80%",
                    margin: "auto",
                    textAlign: "left",
                    marginTop: "30px",
                  }}
                  // className="center"
                >
                  <ul>
                    <li>Upto 15 Instructor</li>
                    <li>Upto 500 Students</li>
                    <li>30,000 Students Minutes</li>
                  </ul>
                </div>
                <div style={{ width: "100%", marginTop: "40px" }}>
                  <div
                    style={{ width: "100%" }}
                    className="btn btn-outline-light"
                  >
                    Proceed
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  border: "1px solid white",
                  padding: "12px",
                  borderRadius: "10px",
                  textAlign: "center",
                  color: "white",
                  height: "100%",
                }}
              >
                <h2>Bussiness</h2>
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <span>$</span>
                  <h1 style={{ color: "#07fc03" }}>0</h1>
                </div>
                <div>per month</div>
                <div
                  style={{
                    width: "80%",
                    margin: "auto",
                    textAlign: "left",
                    marginTop: "30px",
                  }}
                >
                  <ul>
                    <li>Upto 30 Instructor</li>
                    <li>Upto 5000 Students</li>
                    <li>100,000 Students Minutes</li>
                  </ul>
                </div>
                <div style={{ width: "100%", marginTop: "40px" }}>
                  <div
                    style={{ width: "100%" }}
                    className="btn btn-outline-light"
                  >
                    Proceed
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  border: "1px solid white",
                  padding: "12px",
                  borderRadius: "10px",
                  textAlign: "center",
                  color: "white",
                  height: "100%",
                }}
              >
                <h2>Enterprise</h2>
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <span>$</span>
                  <h1 style={{ color: "#07fc03" }}>0</h1>
                </div>
                <div>per month</div>
                <div
                  style={{
                    width: "80%",
                    margin: "auto",
                    textAlign: "left",
                    marginTop: "30px",
                  }}
                >
                  <ul>
                    <li>1000,000 Students Minutes</li>
                  </ul>
                </div>
                <div style={{ width: "100%", marginTop: "65px" }}>
                  <div
                    style={{ width: "100%" }}
                    className="btn btn-outline-light"
                  >
                    Proceed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <img src={commonlogo} width="300px" height="350px" />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
