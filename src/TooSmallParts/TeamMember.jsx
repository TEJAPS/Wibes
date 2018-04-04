import React, { Component } from 'react';
import vid_demo from "../img/others/video-demo.jpg";
import '../componentcss/Promo.css';

class TeamMember extends Component {
  render() {
    return (
      <div className="TeamMember">
         <div className="col-sm-4 col-md-3">
            <div className="single-member one text-center">
                <img src={this.props.source} alt="" className="img-responsive"/>
                <div className="member-description home-style-2">
                    <div className="member-description-inner">
                        <h3 className="member-name">JASON ADAMS</h3>
                        <p className="designation">UI UX Designer</p>
                        <p className="short-description">Lorem ipsum dolor sit amet, secte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <ul className="social list-inline home-style-2">
                            <li><a href="#"><i className="icofont icofont-social-facebook"></i></a></li>
                            <li><a href="#"><i className="icofont icofont-social-google-plus"></i></a></li>
                            <li><a href="#"><i className="icofont icofont-social-twitter"></i></a></li>
                            <li><a href="#"><i className="icofont icofont-social-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
