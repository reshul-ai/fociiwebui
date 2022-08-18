import React, { useState, useEffect } from "react";
import pagelogo from "../../assets/commonIcons/page-icon.png";
import companylogo from "../../assets/navbar/BALogo.png";
import demouserimage from "../../assets/commonIcons/demouserimage.jpg";
import "./profile.css";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [type, setType] = useState("B2B");
  const [email, setEmail] = useState("");
  const [imageurl, setImageurl] = useState(demouserimage);
  const [organization, setOrganization] = useState("");

  const profileEdit = (e) => {
    e.preventDefault();
    console.log(
      `${username} - ${organization} - ${email} - ${imageurl} - ${type}`
    );
  };

  const userDetails = {
    username: "User 007",
    image: "https://braina.live/images/team/reshul.jpg",
    email: "reshul@braina.live",
    type: "B2B",
  };

  return (
    <div className="container-fluid pb-5">
      {/* <div className="row">
        <div className="col-md-2" id="page-logo-div">
          <a href="/">
            <img
              src={companylogo}
              width="143px"
              height="142px"
              alt="Company Logo"
              className="img img-fluid"
            />
          </a>
        </div>
        <div className="col-md-1 pt-3">
          <p id="page-heading">FOCII</p>
        </div>
        <div className="col-md-5"></div>
        <div className="col pt-4">
          <button className="btn btn-light" id="header-button">
            Log out
          </button>
        </div>
        <div className="col pt-4">
          <button className="btn btn-light" id="header-button">
            Register
          </button>
        </div>
      </div> */}

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <p id="up-heading">Profile Details</p>
              </div>
            </div>
            <div className="row" id="form-container">
              <div className="col">
                <div
                  className="container-fluid p-5 rounded"
                  id="profile-detail-section"
                >
                  <form onSubmit={profileEdit}>
                    <div class="form-group">
                      <div className="form-outline">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) => setUsername(event.target.value)}
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div className="form-outline">
                        <label for="useremail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="useremail"
                          className="form-control"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div className="form-outline">
                        <label className="form-label">Organization</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) =>
                            setOrganization(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="form-outline">
                      <label className="form-label">Type</label>
                      <select
                        name="typeoforg"
                        id="type"
                        className="form-control"
                        onChange={(event) => setType(event.target.value)}
                      >
                        <option name="B2B">B2B</option>
                        <option name="B2C">B2C</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <div className="form-outline">
                        <label for="inputimage" className="form-label">
                          Profile Image
                        </label>{" "}
                        <br />
                        <img src={imageurl} width="150px" />
                        <input
                          id="inputimage"
                          type="file"
                          className="form-control mt-3"
                          onChange={(event) => setImageurl(event.target.value)}
                        />
                        <input
                          id="inputimage"
                          type="text"
                          className="form-control mt-3"
                          placeholder="Image URL"
                          onChange={(event) => setImageurl(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-outline pt-3">
                      <button className="btn btn-outline-light form-control">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Profile;
