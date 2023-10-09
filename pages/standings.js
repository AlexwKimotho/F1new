import React, { useState, useEffect } from 'react';

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [teamStandings, setTeamStandings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ergast.com/api/f1/2008/driverStandings.json?limit=3');
                const data = await response.json();
                const driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

                setStandings(driverStandings);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

      useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://ergast.com/api/f1/2008/constructorstandings.json?limit=4');
              const data = await response.json();
              const constructorStandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

              setTeamStandings(constructorStandings);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  return (
    <div className="row m-4">
      <div className="col-xl-5 ">
        <div className="card2"style={{ height: '250px' }}>
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
   <div className="col-xl-2 offset-xl-1">
            <div className="card2">
                <div className="card2-header">
                    <h4 className="card-title">WC Standings</h4>
                </div>
                <div className="card2-body">
                    <div className="row">
                        {standings.map(driver => (
                            <div className="col-12" key={driver.Driver.driverId}>
                                <h6 className="card-title">Driver: {driver.Driver.givenName} {driver.Driver.familyName}</h6>
                                <p>Car: {driver.Constructors[0].name}</p>
                                <p>Points: {driver.points}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-2 offset-xl-1">
            <div className="card2">
                <div className="card2-header">
                    <h4 className="card-title">Team Standings</h4>
                </div>
                <div className="card2-body">
                    {teamStandings.map((team, index) => (
                        <div className="card2-header" key={index}>
                            <div className="d-flex align-items-center">
                                
                                <h6 className="card-title">
                                    {team.Constructor.name}
                                </h6>
                                <br/>
                                <p style={{padding:'10px', marginLeft:'45px'}}>Points: {team.points}</p> 

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Standings;
