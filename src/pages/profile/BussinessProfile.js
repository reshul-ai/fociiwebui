import React from "react";

function BussinessProfile() {
  return (
    <section className="container fluid" style={{ color: "red" }}>
      <div className="row" style={{ display: "flex", flexDirection: "row" }}>
        <div className="col-6">
          <div>
            <div className="row">
              <div
                className="col"
                style={{
                  padding: "10px",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  style={{
                    borderRadius: "50%",
                    height: "200px",
                    width: "200px",
                    margin: "auto",
                  }}
                />
              </div>
              <div
                className="col"
                style={{
                  padding: "10px",
                  color: "white",
                  paddingTop: "30px",
                }}
              >
                <h2>Name</h2>
                <h4>Email@gmail.com</h4>
                <h5>D.O.B</h5>
                <h5>Bio some yhing about me</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6" style={{ color: "white" }}>
          <div className="row">
            <div style={{ padding: "15px" }}>
              <div style={{ display: "flex" }}>
                <h4>Active Subscription</h4>
                <h4
                  style={{
                    marginLeft: "10px",
                    background: "green",
                    borderRadius: "20px",
                    padding: "5px",
                    fontSize: "15px",
                    width: "130px",
                    textAlign: "center",
                  }}
                >
                  Free Tier
                </h4>
              </div>
              <div>
                <div style={{ marginTop: "20px" }}>
                  <div className="btn btn-outline-light">Renew Licence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "white" }}></hr>
        <div className="col-6" style={{ color: "white" }}>
          <h2>Genrated Tokens</h2>
          <div style={{ marginTop: "20px" }}>
            <div>
              <select>
                <option>Enter user type</option>
                <option>B2C</option>
                <option>B2B</option>
              </select>
            </div>
            <div className="btn btn-outline-light">Genrate Token</div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <ul>
              <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
              <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
              <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
              <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
              <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
              <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BussinessProfile;
