import React, { Component } from 'react';
import '../componentcss/AwesomeTeam.css';
import vid_demo from "../img/others/video-demo.jpg";
import mem1 from "../img/members/member-1.jpg";
import mem2 from "../img/members/member-2.jpg";
import mem3 from "../img/members/member-3.jpg";
import mem4 from "../img/members/member-4.jpg";
import TeamMember from '../TooSmallParts/TeamMember';

class AwesomeTeam extends Component {
  render() {
    return (
      <div className="AwesomeTeam">
        <section id="team-area" className="overlay-grad-two ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-heading white-shape text-center">
                            <h2>AWESOME TEAM</h2>
                            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                        </div>
                    </div>
                </div>
                   <TeamMember source={mem1}/>
                   <TeamMember source={mem2}/>
                   <TeamMember source={mem3}/>
                   <TeamMember source={mem4}/>                 
            </div>
        </section>
      </div>
    );
  }
}

export default AwesomeTeam;
