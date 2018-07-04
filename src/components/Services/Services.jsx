import React, { Component, Fragment } from 'react';

class Services extends Component{
    render(){
        return(
            <Fragment>
				<div className="nav-waypoint">
					<section id="service-section" className="parallax-section parallax-banner-3 parallax-background service-section fixed">
					<div className="parallax-overlay parallax-overlay-3"></div>
						<div className="grid-container parallax-content">
							<div className="grid-parent grid-100 mobile-grid-100 tablet-grid-100">
							
					
							<div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
							<header className="parallax-header">
							<h2 className="parallax-title"><span>Global Change Divisions</span></h2>
							<p className="parallax-slogan">Our principals and standards for assistance and service apply across the board.  Our dedicated volunteers are happy to assist with know-how and experience in your efforts to get your message out to the world!</p>
							</header>
							</div>
						
							<div className="grid-33 mobile-grid-100 tablet-grid-100">
								<div className="box-fade icon-box">
								<div className="arrow-right"></div>
								<a href="http://globalchangemusic.org/"><i className="icon-music icon-4x service-icon"></i></a>
								</div>
								<div className="box-fade info"> 
								<h3><a href="http://globalchangemusic.org/">Global Change Music</a></h3>
								<p><a href="http://globalchangemusic.org/">Music of the future, for minds of the future.</a></p>
							</div>
							</div>
							
							<div className="grid-33 mobile-grid-100 tablet-grid-100">
								<div className="box-fade icon-box">
								<div className="arrow-right"></div>
								<a href="http://globalchangeradio.org/"> <i className="icon-globe icon-4x service-icon"></i></a>
								</div>
								<div className="box-fade info"> 
								<h3><a href="http://globalchangeradio.org/">Global Change Radio</a></h3>
								<p> <a href="http://globalchangeradio.org/"> Streaming radio for progresive thinkers and change agents.</a></p>
							</div>
							
							</div>
							
							<div className="grid-33 mobile-grid-100 tablet-grid-100">	
								<div className="box-fade icon-box">
								<div className="arrow-right"></div>
								<a href="http://globalchangetelevision.org/"><i className="icon-film icon-4x service-icon"></i></a>
								</div>
								<div className="box-fade info"> 
								<h3><a href="http://globalchangetelevision.org/">Global Change Film</a></h3>
								<p><a href="http://globalchangetelevision.org/">Quality film with meaningful messages and depth.</a></p>
							</div>
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

export default Services;