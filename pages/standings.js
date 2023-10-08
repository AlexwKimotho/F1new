import React from "react";

const Standings = () => {
  return (
    <div className="row m-4">
      <div className="col-xl-5 ">
        <div className="card2"style={{ height: '300px' }}>
          <div className="card2-header">
            <h4 className="card-title">Stats</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-6">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                    </span>
                  </div>
                  
                </div>
              </div>

              <div className="col-xl-6">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon me-3 bg-secondary">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="Second Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                    </span>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-xl-2 offset-xl-1">
        <div className="card2">
          <div className="card2-header">
            <h4 className="card-title">WC Standings</h4>
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
        </div>
      </div>

      <div className=" col-xl-2 offset-xl-1 ">
        <div className="card2">
          <div className="card2-header">
            <h4 className="card-title">Team Standings</h4>
            
          </div>
          <div className="card2-header">
          <div className="d-flex align-items-center"> 
                <img
                    src="https://img.freepik.com/premium-photo/german-flag-germany_469558-1776.jpg"
                    alt="Profile Picture 1"
                    className="me-2"
                    width="40"
                    height="40"
                />
            <h6 className="card-title">
              Mercedes GP
            </h6>
          </div>
          </div>
          <div className="card2-header">
          <div className="d-flex align-items-center"> 
                <img
                    src="https://www.flagsandflagpoles.co.uk/cdn/shop/products/ITALY-150-x-75mm-Table-Flag_800x.jpg?v=1626375424"
                    alt="Profile Picture 1"
                    className="me-2"
                    width="40"
                    height="40"
                />
                
            <h6 className="card-title">
              Ferrari
            </h6>
</div>
          </div>
          <div className="card2-header">
          <div className="d-flex align-items-center"> 
                <img
                    src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
                    alt="Profile Picture 1"
                    className="me-2"
                    width="40"
                    height="40"
                />
            <h6 className="card-title">
              Williams
            </h6>
            </div>
          </div>
          <div className="card2-header">
          <div className="d-flex align-items-center"> 
                <img
                    src="https://a-z-animals.com/media/2022/12/iStock-1054401076-1024x683.jpg"
                    alt="Profile Picture 1"
                    className="me-2"
                    width="40"
                    height="40"
                />
            <h6 className="card-title">
             Redbull Racing
            </h6>
          </div>
          </div>
          <div className="card2-header">
            <div className="d-flex align-items-center"> 
                <img
                    src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop"
                    alt="Profile Picture 1"
                    className="me-2"
                    width="40"
                    height="40"
                />
                <h6 className="card-title">
                    Force india
                </h6>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
