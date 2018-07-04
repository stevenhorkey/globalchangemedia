import React, { Component, Fragment } from 'react';

class About extends Component{
    render(){
        return(
            <Fragment>
                <div className="nav-waypoint">
                <section id="about-section" className="about-section content-section ha-waypoint" data-animate-up="ha-header-hide" data-animate-down="ha-header-small">
                    <div name="about-section" className="grid-container">
                        
                        <div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
                            <header className="section-header">
                                <h2 className="section-title"><span>About Global Change Media</span></h2>
                                <p className="section-slogan-about">Global Change Media is a leading-by-example presence in the beginning of new, honest, fair, and meaningful media. We strive to provide a voice for progress and movement in global change, a development sanctuary for progressive and forward thinkers. </p><p className="section-slogan-about">Global citizens with a wholehearted dedication to special social, economic, political, spiritual, or other causes who need support in formulating and executing the production of their ideas through a creative medium should call on Global Change Media. We have the tools, the knowledge, and the dedication to provide this service through cooperative interdependence.  Our mission is to act on behalf of all citizens of the world in the spirit of bringing powerful positive messages of truth, beauty, and goodness to as many people as we can, using all of today's modern media outlets.</p>
                            </header>
                        </div>
                        
                        <div className="grid-50 tablet-grid-100 mobile-grid-100 about-box" >
                            <figure className="about-icon"><img src="http://globalchange.media/view/images/Icons/icon-1.png" alt="app-development"/></figure>
                            <div className="about-box" >

                            <h3>Progressive Creative Agency</h3>
                                <p>We believe in clear, professional, and modern media development, translating value, concept, purpose, intention and ideal into graphic arts, music, video, websites, copy-writing, and more.  We believe in integrating powerful and effective communication through the arts into all media outlets for global change.</p>


                            
                            </div>
                        </div>

                        <div className="grid-50 tablet-grid-100 mobile-grid-100 about-box" >
                            <figure className="about-icon"><img src="http://globalchange.media/view/images/Icons/icon-2.png" alt="ui-design"/></figure>
                            <div className="about-box" >


                            <h3>Meaningful Media Consulting</h3>
                                <p>We get satisfaction in successful media campaign strategy and development for world progress and change, from content writing to finding distribution mediums and more. As consultants we can help formulate a plan of action for media exposure, and get positive achievements and works organized and highlighted in the public's view. 

                                </p>
                            
                                </div>
                        </div>

                        <div className="grid-50 tablet-grid-100 mobile-grid-100 about-box" >
                            <figure className="about-icon"><img src="http://globalchange.media/view/images/Icons/icon-3.png" alt="brand-identity"/></figure>
                            <div className="about-box" >
                            

                                <h3>New Paradigm Brand Specialists</h3>
                                <p>We want to help forward and progressive companies and organizations discover and define exactly who they are, what they stand for, and what they want to accomplish and then establish an effective means for presenting and conveying a unique brand to find support and allies with shared vision to accomplish <strong>BIG</strong> dreams.
                                </p>
                            </div>
                        </div>

                        <div className="grid-50 tablet-grid-100 mobile-grid-100 about-box" >
                            <figure className="about-icon"><img src="http://globalchange.media/view/images/Icons/icon-4.png" alt="consultancy"/></figure>
                            <div className="about-box" >          

                                <h3>Quality Audio &amp; Video Production</h3>
                                <p>Today's movements in <strong>Global Change</strong> require the best quality audio, video, and post-production services for the most effective communication of concept and vision.  Anything from music videos and new albums in state of the art recording, to scriptwriting and film production.  We have high-grade professional equipment and a creative and ambitious team of dedicated staff to assist and help.</p>
                
                            </div>
                        </div>
                        
                    </div>
                </section>
                </div>
                <div className="clear"></div>
            </Fragment>
        )
    }
}

export default About;