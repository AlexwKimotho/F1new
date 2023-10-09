import React, { useState, useEffect } from 'react';
import Tweet from "./Quote"

const News = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
      fetch('https://api.quotable.io/random')
          .then(response => response.json())
          .then(data => setQuote(data.content));
  }, []);

    return (
        <div className="row m-2 ">
       <div className="col-xl-5 " style={{ marginTop: "-200px" }}>
        <div className="card2"style={{ height: '670px' }}>
          <div className="card2-header">
            <h4 className="card-title">News, Opinion And Analysis</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> Ex-F1racer Jarno Trulli Steps down from racing in Formula E </strong>
                    </span>
                  </div>
                  
                </div>
              </div>

              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> Nico Rosberg demands action over Pirell F1 tyre blowouts for Monza </strong>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> Pirell says F1 teams ignored request for tire limits in 2013 </strong>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> McLaren F1 team's Jenson Button calls BelgianGP </strong>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> Pierre Galy surprised by Daniel de Jong move before GP2 crash </strong>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> Justin Wilson airlifted to hospital after ponoco IndyCar crash </strong>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> BTCC suspends one of Rob Austin Racing's TOCA BTCC licences </strong>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> FIA forced to clarify Forula 1 radio clampdown ambiguities </strong>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="col-xl-4">
                <div className="stat-widget d-flex align-items-center">
                  <div className="widget-icon ">
                    <span>
                      <img
                        src="https://live-production.wcms.abc-cdn.net.au/ea9071af8e0e3a392578d6f4db435cd1?impolicy=wcms_crop_resize&cropH=1376&cropW=2447&xPos=0&yPos=65&width=862&height=485"
                        alt="First Image"
                        className="img-fluid" // Added class to make the image fluid
                      />
                      <br/>
                      <strong> Former Formula 1 team boss and racing driver Guy Liger dies </strong>
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-2 p-2 offset-xl-1">
                <div className="card2" style={{ height: '470px', color:'White', backgroundColor: '#4a2c2a' }}>
                    <div className="card2-header">
                        <h4 className="card-title"> Quote of the Day</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="stat-widget d-flex align-items-center">
                                    <div className="widget-icon ">
                                        <span>
                                            <blockquote>{quote}</blockquote>
                                        </span>
                                        <span>Jane Doe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="card3" style={{ height: '480px', marginLeft:'90px' }}>
                    <div className="card3-header">
                        <h4 className="card-title"> Twitter </h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="stat-widget d-flex align-items-center">
                                    <div>
                                        <blockquote className="twitter-tweet" data-lang="en">
                                            Started P19 
                                            Finished P9 
                                            A battling drive earned 
                                            <a href="https://twitter.com/ZhouGuanyu24?ref_src=twsrc%5Etfw">@ZhouGuanyu24</a> 
                                            his third points finish of the season 👏
                                            <a href="https://twitter.com/hashtag/F1?src=hash&amp;ref_src=twsrc%5Etfw">#F1</a> 
                                            <a href="https://twitter.com/hashtag/QatarGP?src=hash&amp;ref_src=twsrc%5Etfw">#QatarGP</a> 
                                            <a href="https://t.co/HhF2PdvSJI">pic.twitter.com/HhF2PdvSJI</a>
                                        </blockquote>
                                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                    </div>
                                    
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="col-xl-12 ">
                                <div className="stat-widget d-flex align-items-center">
                                    <div>
                                        <blockquote className="twitter-tweet" data-lang="en">
                                            Champions 🙌
                                            Winning the race is the perfect way to end an amazing weekend 
                                            <a href="https://twitter.com/redbullracing?ref_src=twsrc%5Etfw">@redbullracing</a> 
                                            👏 Thank you all for the tremendous support and messages 🙏
                                            <a href="https://twitter.com/hashtag/QatarGP?src=hash&amp;ref_src=twsrc%5Etfw">#QatarGP</a> 
                                            <a href="https://t.co/USAHWye9L9">pic.twitter.com/USAHWye9L9</a>
                                        </blockquote>
                                        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default News;