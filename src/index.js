import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ParallaxBanner from './components/ParallaxBanner/ParallaxBanner';
import Team from './components/Team/Team';
import Counter from './components/Counter/Counter';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Socials from './components/Socials/Socials';
import Musicians from './components/Musicians/Musicians';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class Site extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <Header/>
                <Hero/>
                <About/>
                <ParallaxBanner/>
                <Team/>
                <Counter/>
                <Services/>
                <Portfolio/>
                <Socials/>
                <Musicians/>
                <Contact/>
                
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Site />, document.getElementById('root'));
registerServiceWorker();
