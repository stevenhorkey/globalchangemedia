import React, { Component, Fragment } from 'react';

class ParallaxBanner extends Component{
    render(){
        return(
            <Fragment>
                <section id="parallax-section-2" className="parallax-section parallax-banner-2 parallax-background parallax-section-2 ha-waypoint fixed">
                <div className="parallax-overlay parallax-overlay-2"></div>
                    <div className="grid-container parallax-content">
                        <div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
                            <header className="parallax-header">
                                <h2 className="parallax-title"><span>Socially Conscious<br/>&amp; Progressive Media</span></h2>
                                <p className="parallax-slogan">We believe that the world desperately needs a global spiritual revolution, and part of that is the presence of transformational media.  Global Change Media stands by the principle that the future of humanity requires that we live in cooperative interdependence, teamwork, and alliances. We believe that service, morally conscious action, and leading lives of virtue takes precedence over personal belief and opinion, and that radical unity without uniformity is greatly needed in moving humanity forward. Global Change Media believes anyone who wants a better world needs and deserves a voice and a presence in a new media, and should be part of one globally networked alliance of truth seekers and advocates.</p>
                            </header>
                        </div>
                    </div>
                </section>
                <div className="clear"></div>
            </Fragment>
        )
    }
}

export default ParallaxBanner;