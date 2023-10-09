import React from 'react';

const EmbeddedTweet = () => {
    return (
        <div className="row m-4">
            <div className="col-xl-4 p-2">
                <div className="card3" style={{ height: 'auto' }}>
                    <div className="card3-header">
                        <h4 className="card-title">Embedded Tweet</h4>
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
                            <div className="col-xl-12">
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

export default EmbeddedTweet;
