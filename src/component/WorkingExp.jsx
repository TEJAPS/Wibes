import React, { Component } from 'react';
import '../componentcss/WorkingExp.css';
import mobile_mockup from "../img/mockups/mobile-mockup.png";
import testing_jar from "../img/icons/testing-jar-icon.png";
import data_analysis from "../img/icons/data-analysis-icon.png";
import logic_icon from "../img/icons/login-icon.png";
import bulb_icon from "../img/icons/bulb-icon.png";
class WorkingExp extends Component {
  render() {
    return (
      <div className="WorkingExp">
       <section id="how-it-works-area" className="ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-heading shape-2 text-center">
                            <h2>HOW DOES IT WORK?</h2>
                            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                        </div>
                    </div>
                </div>
                <div className="hiw-feature-content style-2">
                    <div className="hiw-mockup style-2">
                        <img src={mobile_mockup} alt="" className="img-responsive center-block"/>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 p-0 wow fadeIn" data-wow-duration="2s">
                            <div className="hiw-feature one media">
                                <div className="hiw-feature-icon media-left">
                                    <img src={logic_icon} alt=""/>
                                </div>
                                <div className="hiw-feature-details media-body">
                                    <h5>LOGIN FIRST</h5>
                                    <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-sm-offset-4 p-0 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="hiw-feature two media">
                                <div className="hiw-feature-icon media-left">
                                    <img src={testing_jar} alt=""/>
                                </div>
                                <div className="hiw-feature-details media-body">
                                    <h5>Face Testing</h5>
                                    <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 p-0 mt-140 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div className="hiw-feature three media">
                                <div className="hiw-feature-icon media-left">
                                    <img src={data_analysis} alt=""/>
                                </div>
                                <div className="hiw-feature-details media-body">
                                    <h5>DATA ANALYSIS</h5>
                                    <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-sm-offset-4 p-0 mt-140 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div className="hiw-feature four media">
                                <div className="hiw-feature-icon media-left">
                                    <img src={bulb_icon} alt=""/>
                                </div>
                                <div className="hiw-feature-details media-body">
                                    <h5>SHOW RESULT</h5>
                                    <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default WorkingExp;
