import React from "react";

function StudentProfile() {
  return (
    <section className="container fluid">
      <div className="row">
        <div className="col-6">
          <div style={{}}>
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
        {/* <div className="col-6">hii</div> */}
      </div>
      <hr style={{ color: "white" }} />
      <div style={{ color: "white" }}>
        <h2>Upcoming Classes</h2>
      </div>
      <div className="row" style={{ marginTop: "20px", color: "white" }}>
        <div
          className="col-3"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <div
            style={{
              padding: "15px",
              borderRadius: "20px",
              border: "1px solid white",
            }}
          >
            <h3>Date</h3>
            <h5>Name</h5>
            <h6>Agenda this is more than oneline</h6>
          </div>
        </div>
        <div
          className="col-3"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <div
            style={{
              padding: "15px",
              borderRadius: "20px",
              border: "1px solid white",
            }}
          >
            <h3>Date</h3>
            <h5>Name</h5>
            <h6>Agenda this is more than oneline</h6>
          </div>
        </div>
        <div
          className="col-3"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <div
            style={{
              padding: "15px",
              borderRadius: "20px",
              border: "1px solid white",
            }}
          >
            <h3>Date</h3>
            <h5>Name</h5>
            <h6>Agenda this is more than oneline</h6>
          </div>
        </div>
        <div
          className="col-3"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <div
            style={{
              padding: "15px",
              borderRadius: "20px",
              border: "1px solid white",
            }}
          >
            <h3>Date</h3>
            <h5>Name</h5>
            <h6>Agenda this is more than oneline</h6>
          </div>
        </div>
        <div
          className="col-3"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <div
            style={{
              padding: "15px",
              borderRadius: "20px",
              border: "1px solid white",
            }}
          >
            <h3>Date</h3>
            <h5>Name</h5>
            <h6>Agenda this is more than oneline</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentProfile;
