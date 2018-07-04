
import React, { Component, Fragment } from 'react';

class Musicians extends Component{
    render(){
        return(
            <Fragment>
				<div className="nav-waypoint">
					<section id="testimonial-section" className="testimonial-section content-section">
						<div className="grid-container">
							<div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
								<header className="section-header">
									<h2 className="section-title"><span>Musicians</span></h2>
									<p className="section-slogan"><a target="_blank" href="http://globalchangemusic.org/">Global Change Music</a> Artists</p>
								</header>
							</div>
							
							<div className="clear"></div>
							
							<div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
							
							<div className="ut-testimonials">
								<div id="avatarSlider" className="ut-rotate-avatar">
									<ul className="slides">
										<li className="flex-active-slide">
											<a href="http://cosmopop.org/"><img src="./Global_Change_Media_files/taliasvan.jpg" className="ut-quote-avatar" alt="avatar" draggable="false"/></a>
										</li>
										<li className="">
											<a href="http://vansguard.org/"> <img src="./Global_Change_Media_files/vansguard2018.jpg" className="ut-quote-avatar" alt="avatar" draggable="false"/></a>
										</li>
										<li className="">
											<a href="http://israfelawakened.org/"> <img src="./Global_Change_Media_files/ellanora2.jpg" className="ut-quote-avatar" alt="avatar" draggable="false"/></a>
										</li>
										<li className="">
											<a href="https://www.facebook.com/pages/Starseed-Acoustic-Ensemble-Interuniversal-Home/793880507321590?ref=br_tf"> <img src="./Global_Change_Media_files/starseed-acoustic-ensemble.jpg" className="ut-quote-avatar" alt="avatar" draggable="false"/> </a>
										</li>
									</ul>
								</div>
								
								<div id="quoteSlider" className="ut-rotate-quote" >
									<ul className="slides">
										<li  className="flex-active-slide">
											<span className="ut-quote-comment">TaliasVan</span>
											<h3 className="ut-quote-name">&amp; the Bright &amp; Morning Star Band</h3>    
										</li>
										<li  className="">
											<span className="ut-quote-comment">VansGuard</span>
											
										</li>
										<li  className="">
											<span className="ut-quote-comment">Ellanora DellErba</span>
											<h3 className="ut-quote-name">&amp; The Israfel Awakened Band</h3>     
										</li>
										<li  className="">
											<span className="ut-quote-comment">The Starseed Acoustic Ensemble</span>
												
										</li>
									</ul>
								<ul className="flex-direction-nav"><li><a className="flex-prev" href="http://globalchange.media/#">Previous</a></li><li><a className="flex-next" href="http://globalchange.media/#">Next</a></li></ul></div> 
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

export default Musicians;