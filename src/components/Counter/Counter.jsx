import React, { Component, Fragment } from 'react';

class Counter extends Component{
    render(){
        return(
            <Fragment>
				<section id="counter-section" className="counter-section parallax-section parallax-banner-6 parallax-background fixed">
					<div className="parallax-overlay parallax-overlay-6"></div>
					<div className="grid-container parallax-content">
						<div className="grid-parent grid-100 mobile-grid-100 tablet-grid-100">
						
						
						<div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
							<header className="parallax-header">
								<h2 className="parallax-title"><span>Our Work</span></h2>
								<p className="parallax-slogan">All progress in the direction of worldwide unification with transformational media is exciting for us; we're inspired, creative, and ambitious change agents striving to fill our roles in the betterment of humankind.</p>
							</header>
						</div>
						
						
						<div className="grid-25 mobile-grid-100 tablet-grid-25">
							<div className="counter-box counter" data-counter="143">
								<span className="count">1270</span>
								<h3 className="counter-details">Videos Produced</h3>
							</div>
						</div>
						
						
						<div className="grid-25 mobile-grid-100 tablet-grid-25">
							<div className="counter-box counter" data-counter="54">
								<span className="count">75</span>
								<h3 className="counter-details">Websites Completed</h3>
							</div>
						</div>
						
						
						<div className="grid-25 mobile-grid-100 tablet-grid-25">
							<div className="counter-box counter" data-counter="22">
								<span className="count">75</span>
								<h3 className="counter-details">Large Festivals</h3>
							</div>
						</div>
						
						
						<div className="grid-25 mobile-grid-100 tablet-grid-25">
							<div className="counter-box counter" data-counter="402">
								<span className="count">3</span>
								<h3 className="counter-details">Events Hosted</h3>
							</div>
						</div>
				
						</div>
					</div>
				</section>
            </Fragment>
        )
    }
}

export default Counter;