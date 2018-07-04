import React, { Component, Fragment } from 'react';

import TeamMember from '../TeamMember/TeamMember';
import Members from './Member';

class Team extends Component{
    render(){
        return(
            <Fragment>
                <div className="nav-waypoint">
                    <section id="team-section" className="team-section content-section">
                        <div className="grid-container">
                            <div className="grid-70 prefix-15 mobile-grid-100 tablet-grid-100">
                                <header className="section-header">
                                    <h2 className="section-title"><span>Our Team</span></h2>
                                    <p className="section-slogan">Most active members of Global Change Media are full-time volunteers in other constituents as well, including <a href="http://avalongardens.org/">Avalon Gardens</a> and <a href="http://theseaofglass.org/">The Sea of Glass - Center for the Arts</a></p>
                                </header>
                            </div>
                            <div className="clear"></div>

                            {/* {Members.map((element,key) => {
                                return(
                                    <TeamMember
                                    name={element.name}
                                    title={element.title}
                                    role={element.role}
                                    key={key}
                                    />
                                )
                            })} */}

                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/gabriel-gcmedia.jpg" alt="member"/>
                                <div className="member-box">
                                    <h3>Gabriel of Urantia</h3>
                                    <hr/>
                                    <span>CEO - Founder <br/> President &amp; Executive Director</span>
                                </div>
                            </div>
                            
                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/amadon-gcmedia.jpg" alt="member"/>
                                <div className="member-box">
                                    <h3>Amadon DellErba</h3>
                                    <hr/>
                                    <span>COO - Director <br/>Chief Creative Officer</span>
                                </div>
                                
                            </div>

                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/alten-gcmedia.jpg" alt="member"/>
                                
                                <div className="member-box">
                                    <h3>Alten Hotz</h3>
                                    <hr/>
                                    <span>Chief Marketing Officer - Operations Director<br/><em> Marketing 18 years NBC Universal </em></span>
                                </div>
                                
                            </div>


                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="http://globalchange.media/view/images/staff/new/ard-gcmedia2.png" alt="member"/>
                                
                                <div className="member-box">
                                    <h3>Ardendae Gasser</h3>
                                    <hr/>
                                    <span>Graphics Dept. Manager &<br /> Administrative Coordinator - <br />Production Facilitator<br /><span>BS in Journalism, University of Colorado<br />MBA, University of Alabama</span></span>
                                </div>
                                
                            </div>


                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/eric-gcmedia.png" alt="Austein Ganoe"/>
                                
                                <div className="member-box">
                                    <h3>Austein Ganoe</h3>
                                    <hr/>
                                    <span>Videographer &amp; Video Editor<br/>Post-Production Supervisor - Creative Consultant<br/><span>Cinema-Television Production, University of Southern California</span></span>
                                </div>
                                
                            </div>


                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/mycenay.jpg" alt="Mycenay Plyler"/>
                                
                                <div className="member-box">
                                    <h3>Mycenay Plyler</h3>
                                    <hr/>
                                    <span>Booking Agent <br/> Event, Advertising &amp; Marketing Coordinator </span>
                                </div>

                            </div>
                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/kaileen-gcmedia.png" alt="Kaileen Fitzpatrick"/>                
                                <div className="member-box">
                                    <h3>Kaileen Fitzpatrick</h3>
                                    <hr/>
                                    <span>Videographer &amp; Video Editor <br/>Photographer - Graphic Artist</span>
                                </div>
                                
                            </div>
                                        
                                        
                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/savio-gcmedia.png" alt="member"/>
                                
                                <div className="member-box">
                                    <h3>Savijaveh Wonson</h3>
                                    <hr/>
                                    <span>Graphics Department Manager <br/>Operations &amp; Production Assistant </span>
                                </div>
                                
                            </div>

                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/steinhardt.jpg" alt="member"/>
                                
                                <div className="member-box">
                                    <h3>DaMaeAn Steinhardt</h3>
                                    <hr/>
                                    <span>KVAN Radio Station Manager<br/><span>Duke University, BA—English</span></span>
                                </div>
                                
                            </div>  

                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/asai-gcmedia.png" alt="Asai Lohmann"/>
                                
                                <div className="member-box">
                                    <h3>Asai Lohmann</h3>
                                    <hr/>
                                    <span>IT Systems Administrator - ProTools Technician <br/> Software Engineer &amp; Consultant<br/></span>
                                </div>
                                
                            </div>
                                        

                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/graywolf-gcmedia.jpg" alt="member"/>
                                
                                <div className="member-box">
                                    <h3>ManaLucian Samayoa</h3>
                                    <hr/>
                                    <span>Social Media Specialist &amp; Accounts Manager</span>
                                </div>
                                
                            </div> 
                                    
                            <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                                <img src="./Global_Change_Media_files/kazarian-gcmedia.jpg" alt="member"/>
                                
                                <div className="member-box">
                                    <h3>Kazarian Giannangelo</h3>
                                    <hr/>
                                    <span>KVAN Radio Director of Operations</span>
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

export default Team;