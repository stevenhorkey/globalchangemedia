import React, { Component, Fragment } from 'react';


class Header extends Component{
    render(){
        return(
            <Fragment>
                <header id="header-section" className="ha-header ha-header-hide">
                    <div className="grid-container">
                            <div className="ha-header-perspective">
                                <div className="ha-header-front">
                                <div className="grid-15 tablet-grid-15 hide-on-mobile">
                                    <h1 className="logo"><a href="#top"><img src="http://globalchange.media/view/images/graphics/gcmedia-logo-white.png" alt="Global_Change_Media Logo"/></a></h1>
                                    </div>
                                    <nav id="ut-navigation" className="grid-80 tablet-grid-80 hide-on-mobile">
                                        <a className="selected" href="#top">Home</a>
                                        <a href="#about-section">About</a>
                                        <a href="#team-section">Team</a>
                                        <a href = '/events'>Events</a>
                                        <a href="#service-section">Divisions</a>
                                        <a href="#portfolio-section">Affiliates</a>
                                        <a href="#testimonial-section">Musicians</a>
                                        <a href="#contact-section">Contact</a>
                                    </nav>
                                </div>
                            </div>
                    </div> 
                </header>
                <div className="clear"></div>
            </Fragment>
        )
    }
}

export default Header;