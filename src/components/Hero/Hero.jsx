import React, { Component, Fragment } from 'react';

class Hero extends Component{
    render(){
        return(
            <Fragment>
                <section className="hero ha-waypoint parallax-section parallax-banner-1 parallax-background" data-animate-up="ha-header-hide" data-animate-down="ha-header-hide">
                    <div className="parallax-overlay parallax-overlay-1"></div> 
                    <div className="grid-container">
                        <div className="hero-holder grid-100 mobile-grid-100 tablet-grid-100">
                            <div className="hero-inner">
                                <span className="hero-description">Creative Agency - Media Consultants - Brand Specialists - Audio & Video Production</span>
                                <div className="hero-title-holder"><h1 className="hero-title"><img src = 'http://globalchange.media/view/images/graphics/gcmedia-logo-white.png' alt = 'Global_Change_Media'/></h1></div>
                                <span className = "motto"><i>Bold - Fearless - Visionary</i></span>
                                <span className="btn-holder"><a href="#about-section" id="to-about-section" className="hero-btn">Enter</a></span>
                            </div>
                            <br/><br/>
                            <div  className = 'intrinsic-container intrinsic-container-16x9'>
                            </div> 
                        </div>    													
                    </div>
                </section>
                <div className="clear"></div>
            </Fragment>
        )
    }
}

export default Hero;