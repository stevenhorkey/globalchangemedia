import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer classSite="footer">
            <a href="http://globalchange.media/#top" classSite="toTop"><i classSite="icon-angle-up"></i></a>
                <div classSite="grid-container">
                    <div classSite="grid-100 mobile-grid-100 tablet-grid-100">
                        <h3>We <i classSite="icon-heart"></i> service.</h3>   
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;