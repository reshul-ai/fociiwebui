import React from "react";

function StudentProfile() {
  

  let studentProfileDetails = {
      name: "John Doe",
      dob: "Demo Date of Birth",
      bio:"Hi I am John Doe using BrainAlive B2B"
  };

  let upcomingClasses = [
    {
      id: 1,
      date: "Demo Date 1",
      name:"Demo Class Name 1",
      agenda: "Demo Agenda 1"
    },
    {
      id: 2,
      date: "Demo Date 2",
      name:"Demo Class Name 2",
      agenda: "Demo Agenda 2"
    },
    {
      id: 3,
      date: "Demo Date 3",
      name:"Demo Class Name 3",
      agenda: "Demo Agenda 3"
    },
    {
      id: 4,
      date: "Demo Date 4",
      name:"Demo Class Name 4",
      agenda: "Demo Agenda 4"
    },
    {
      id: 5,
      date: "Demo Date 5",
      name:"Demo Class Name 5",
      agenda: "Demo Agenda 5"
    }
  ]

  
  return (
    <>
          <section className="gradient-custom">
              <div className="container-fluid">
              <div className="row d-flex justify-content-around align-items-center">
        <div className="col col-12 col-sm-12 col-md-7 col-lg-5">
          <div className="container-fluid">
            <div className="row text-center">
              <div
                className="col-md"
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  className="img img-fluid w-50"
                  style={{
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
              </div>
              <div className="col-md-8 text-md-start" style={{
                  padding: "10px",
                  color: "white",
                  paddingTop: "30px",
                }}>
                <h2>Name</h2>
                <h4>{studentProfileDetails.name}</h4>
                <h5>{studentProfileDetails.dob}</h5>
                <h5>{studentProfileDetails.bio}</h5>
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
          <div className="row text-light"  >
                  {
                    upcomingClasses.map(item =>{
                      
                      return(
                        <div
                        className="col-lg-3 col-md-4 col-sm-4"
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                          >
                            <div
                              style={{
                                padding: "15px",
                                borderRadius: "20px",
                                border: "1px solid white",
                              }}
                            >
                              <h3>{item.date}</h3>
                              <h5>{item.name}</h5>
                              <h6>{item.agenda}</h6>
                            </div>
                          </div>
                      )

                      
                    })
                  }            
          </div>
          </div>
          </section>
    </>
  );
}

export default StudentProfile;
