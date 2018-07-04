import React, { Component, Fragment } from 'react';

const style = {
	font:{
		fontSize: '18px'
	}
}

class Contact extends Component{
    render(){
        return(
            <Fragment>
				<div className="nav-waypoint">
					<section id="contact-section" className="contact-section parallax-section parallax-banner-5 parallax-background fixed">
					<div className="parallax-overlay parallax-overlay-5"></div>
						<div className="grid-container parallax-content">
						
								<div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
									<header className="parallax-header">
										<h2 className="parallax-title"><span>Contact Us</span></h2>
										<p className="parallax-slogan">We are alive and well, and we'd love to hear from you!</p>
									</header>
								</div>
							
							<div className="clear"></div>
							
							<div className="grid-100 mobile-grid-100 tablet-grid-100">
							<div className="contact-wrap">
							
							
							<div className="grid-parent grid-40 suffix-5 mobile-grid-100 tablet-grid-100">
							<div className="contact-message">
							<h3 className="grid-100">Our Address</h3>
								<ul className="icons-ul" style={style.font}>
									<li><i className="icon-li icon-home"></i>330 E 7th St. Tucson, Arizona 85705</li>
									<li><i className="icon-li icon-home"></i>29 Tubac Rd Suite #2, Tubac, AZ 85646</li>
									<li><i className="icon-li icon-phone"></i>(520) 398-2542</li>
									<li><i className="icon-li icon-phone"></i> 1.866.282.2205</li>
									<li><i className="icon-li icon-envelope-alt"></i>Box 1613 Tubac, Arizona 85646</li>
									<li><i className="icon-li icon-envelope-alt"></i>info@globalchange.media</li>
									<li><i className="icon-li icon-globe"></i>globalchange.media</li>
								</ul>
							</div>
							</div>
							
							<div className="grid-parent grid-55 mobile-grid-100 tablet-grid-100">
							<div className="contact-form-holder clearfix">
							
							
							<h3 className="grid-100">Drop us a line</h3>
							
							<form id="contact-form" className="contact-form">
							
								<ul className="grid-50">
								
									<li><input id="name" className="name" type="text" name="name" placeholder="Name:"/></li>
									<li><input id="email" className="email" type="email" name="email" placeholder="E-Mail:"/></li>
									<li><input id="phone" className="phone" type="text" name="phone" placeholder="Phone:"/></li>
									
								</ul>
								
								<ul className="grid-50">
									<li><textarea id="message" className="message" name="message" placeholder="Message:"></textarea></li>
								</ul>
								
								<div className="grid-100">    
									<input id="send-btn" className="send-btn w-100" type="submit" name="send-btn" value="Send"/>
									<div className="success-message">Email has been sent!</div>
									<div className="alert-message"></div>
									<div className="error-message">Email could not be delivered. Please try again later!</div>
								</div>   
							</form>

							</div>
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

export default Contact;