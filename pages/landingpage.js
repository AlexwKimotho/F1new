import React from "react";

const Landing = () => {
    return (
<div className="container col-xxl-8 col-xl-10 col-lg-6">
        <div className="card">
          <div className="card-image">
            <p style={{ fontWeight: "Bold", margin: "10px", color: "Grey" }}>
              {" "}
              Featured
            </p>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "270px",
                marginLeft: "10px",
              }}
            >
              Audi torn on Engine Deal for Red Bull Racing
            </p>
            <p style={{ fontSize: "Medium", margin: "10px" }}>
              Toto wolf has admitted supplying Red Bull with engines could be
              "an attractive option" for Mercees. It is a significant
              change.....
            </p>
          </div>
        </div>

        <div className=" col-xl-4">
          <div className="card2">
            <div className="card2-header">
              <h4 className="card-title">Top Stories</h4>
              <div className="unpaid-content">
                <ul>
                  <li>
                    <p className="mb-0">August 20, 2015</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card2-header">
              <h6 className="card-title">
                Vettel will do anything to 'annoy mercedes
              </h6>
            </div>
            <div className="card2-header">
              <h6 className="card-title">
                Renault continued to work hard during summer break
              </h6>
            </div>
            <div className="card2-header">
              <h6 className="card-title">
                A lap Spa-Francorchamps onboard with Rosberg
              </h6>
            </div>
            <div className="card2-header">
              <h6 className="card-title">
                Clampdown on starts 'step in the right direction' -
              </h6>
            </div>
            <div className="card2-header">
              <h6 className="card-title">
                Ferrari re-signs Kimi Raikkonen for 2016
              </h6>
            </div>
            <div className="card2-body">
              <div className="unpaid-content">
                <ul>
                  <li>
                    <p className="mb-0">August 19, 2015</p>
                  </li>
                  <li>
                    <p className="mb-0">August 19, 2015</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    };
    
    export default Landing;