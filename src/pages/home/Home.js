import react from "react";
import companylogo from "../../assets/navbar/BALogo.png";
import commonlogo from "../../assets/commonIcons/page-icon.png";
import "./home.css";
import Footer from "../../common/footer";

const Home = () => {
  return (
    <>

    <section className="gradient-custom">
        <div className="container-fluid" id="mainHome">
        

        <div className="row d-flex justify-content-around align-items-center">
          <div className="col col-12 col-sm-12 col-md-7 col-lg-5">
            <div className="container-fluid pt-5">
              <div className="row">
                <div className="col">
                  <p id="mainHeading">
                    Realtime Personalized <br /> Data Visualization <br />{" "}
                    Expirence
                  </p>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col">
                  <p id="shortHeading">
                    FOCII is an Engagement AI solution for
                    Learning/Webinar/Meeting hosts to understand their audience’s
                    interest in real time and maximize engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 text-center">

              <img
                      src={commonlogo}
                      className="img img-fluid p-2"
                      alt="learning"
                      style={{ width: 500 + "px" }}
                    />
          </div>
        </div>

        <div className="row">
            <div className="col col-lg-3 ps-lg-5 pt-5 mb-5 text-center ">
              <a href="https://focii.braina.live/#/login" target="_blank">
                <button className="btn btn-light" id="focii-host-button">
                  FOCII Host
                  </button>
              </a>
            </div>
            <div className="col col-lg-3 ps-lg-5 pt-5 mb-5 text-center">
              <a href="/contact-us">
                <button className="btn btn-light" id="focii-host-button">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
    </section>
    
    </>
    
  );
};

export default Home;
