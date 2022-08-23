import React from "react";

function BussinessProfile() {



  let studentProfileDetails = {
    name: "John Doe",
    dob: "Demo Date of Birth",
    bio:"Hi I am John Doe using BrainAlive B2B"
};


  return (
    // <section className="container fluid" style={{ color: "red" }}>
    //   <div className="row" style={{ display: "flex", flexDirection: "row" }}>
    //     <div className="col-lg-6">
    //       <div className="container-fluid">
    //         <div className="row">
    //           <div
    //             className="col"
    //             style={{
    //               padding: "10px",
    //               margin: "auto",
    //               display: "flex",
    //               justifyContent: "center",
    //             }}
    //           >
                //  <img
                //   src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                //   className="img img-fluid w-75"
                //   style={{
                //     borderRadius: "50%",
                //     margin: "auto",
                //   }}
                // />
    //           </div>
    //           <div
    //             className="col"
    //             style={{
    //               padding: "10px",
    //               color: "white",
    //               paddingTop: "30px",
    //             }}
    //           >
                //  <h2>Name</h2>
                // <h4>{studentProfileDetails.name}</h4>
                // <h5>{studentProfileDetails.dob}</h5>
                // <h5>{studentProfileDetails.bio}</h5>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-lg-6" style={{ color: "white" }}>
    //       <div className="row">
    //         <div style={{ padding: "15px" }}>
    //           <div style={{ display: "flex" }}>
    //             <h4>Active Subscription</h4>
    //             <h5 className="bg-success ms-2 ps-2 pe-2 border rounded">
    //               Free Tier
    //             </h5>
    //           </div>
    //           <div>
    //             <div style={{ marginTop: "20px" }}>
    //               <div className="btn btn-outline-light">Renew Licence</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <hr style={{ color: "white" }}></hr>
    //     <div className="col-6" style={{ color: "white" }}>
    //       <h2>Generated Tokens</h2>
    //       <div style={{ marginTop: "20px" }}>
    //         <div>
              // <select>
              //   <option>Enter user type</option>
              //   <option>B2C</option>
              //   <option>B2B</option>
              // </select>
    //         </div>
    //         <div className="btn btn-outline-light">Genrate Token</div>
    //       </div>
    //       <div className="col-md-6" style={{ marginTop: "20px" }}>
            // <ul>
            //   <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
            //   <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
            //   <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
            //   <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
            //   <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
            //   <li>hgsakjdhdkjshjfskldkjsdkljdkjsfah</li>
            // </ul>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
          <section className="gradient-custom">
              <div className="container-fluid mb-5 pb-5 pt-5">
                <div className="row text-center text-light d-flex justify-content-center">
                    <div className="col-sm-4 text-lg-end">
                        < img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className="img img-fluid w-50"
                        style={{
                          borderRadius: "50%",
                          margin: "auto",
                        }}
                      />
                    </div>
                    <div className="col-md-4 text-md-start">
                            <h2>Name</h2>
                        <h4>{studentProfileDetails.name}</h4>
                        <h5>{studentProfileDetails.dob}</h5>
                        <h5>{studentProfileDetails.bio}</h5>
                    </div>
                    <div className="col text-lg-start pt-5 pt-lg-0">
                        <div className="container-fluid">
                            <div className="row text-md-start">
                              <div className="col">
                              <h4>Active Subscription</h4>
                       
                              </div>
                              <div className="col-4 text-start">
                              <p className="bg-success ms-2 ps-2 pe-2 border rounded">Free Tier</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                  <button className="btn btn-outline-light">Renew Lisence</button>
                              </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr className="text-light" />
                <div className="row text-center text-light d-flex justify-content-center">
                        <div className="col-md-6 text-md-end">
                          <select>
                            <option>Enter user type</option>
                            <option>B2C</option>
                            <option>B2B</option>
                          </select>
                          <div className="btn btn-outline-light">Genrate Token</div>
                        </div>
                        <div className="col-md-6 pt-lg-0 pt-5 text-lg-start">
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
    </>
    
  );
}

export default BussinessProfile;
