import React, { Component, Fragment } from 'react';

class TeamMember extends Component{
    render(){
        return(
            <Fragment>
                

                <div className="member-box grid-33 mobile-grid-100 tablet-grid-50">
                    <img src="./Global_Change_Media_files/gabriel-gcmedia.jpg" alt="member"/>
                    <div className="member-box">
                        <h3>{this.props.name}</h3>
                        <hr/>
                        <span>{this.props.title}<br/> {this.props.role}</span>
                    </div>
                    
                </div>
                            
                             
            </Fragment>
        )
    }
}

export default TeamMember;