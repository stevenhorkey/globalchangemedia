import React, { Component, Fragment } from 'react';

class Socials extends Component{
    render(){
        return(
            <Fragment>
				<section id="social-section" className="parallax-section parallax-banner-4 parallax-background social-section fixed">
					<div className="parallax-overlay parallax-overlay-4"></div>
						<div className="grid-container parallax-content">
							<div className="grid-parent grid-100 mobile-grid-100 tablet-grid-100">
							
								<div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
									<header className="parallax-header">
									<h2 className="parallax-title"><span>Get Connected</span></h2>
									<p className="parallax-slogan">If you want to stay in touch and keep tabs on our latest work and effort, you can find us in social media here:</p>
									</header>
								</div>
							
							<div className="clear"></div>
							
							<ul className="social-network">
								<li className="facebook grid-33 tablet-grid-33 mobile-grid-50">
									<a className="social-link" href="https://www.facebook.com/pages/Global-Change-Media/338044249736621" target="_blank">
									<span className="social-icon"><i className="icon-facebook icon-4x"></i></span>
									<h3 className="social-title">Facebook</h3>
									<span className="social-info">Join the Conversation</span>
									</a>
								</li>
				
								{/* <li className="twitter grid-20 tablet-grid-20 mobile-grid-50">
									<a className="social-link" href="#" target="_blank">
									<span className="social-icon"><i className="icon-twitter icon-4x"></i></span>
									<h3 className="social-title">Twitter</h3> 
									<span className="social-info">Get the Latest News</span>
									</a>
								</li> */}

								<li className="google-plus grid-33 tablet-grid-33 mobile-grid-50">
									<a className="social-link" href="https://plus.google.com/u/0/102078257284410685701/posts" target="_blank">
									<span className="social-icon"><i className="icon-google-plus icon-4x"></i></span>
									<h3 className="social-title">Google Plus</h3>
									<span className="social-info">Join Our Circle</span>
									</a>
								</li>
								<li className="youtube grid-33 tablet-grid-33 mobile-grid-50">
									<a className="social-link" href="https://www.youtube.com/channel/UCeqelHNeM4XwQE2lV_N6Xmg" target="_blank">
									<span className="social-icon"><i className="icon-youtube icon-4x"></i></span>
									<h3 className="social-title">YouTube</h3>
									<span className="social-info">View Exclusive Videos</span>
									</a>
								</li>

								{/* <li className="instagram grid-20 tablet-grid-20 mobile-grid-50">
									<a className="social-link" href="#" target="_blank">
									<span className="social-icon"><i className="icon-instagram icon-4x"></i></span>
									<h3 className="social-title">Instagram</h3>
									<span className="social-info">Latest</span>
									</a>
								</li> */}

							</ul>
						
						</div>
					</div>
				</section>
				<div className="clear"></div>
            </Fragment>
        )
    }
}

export default Socials;