import React, { Component } from 'react';
import  appm_3 from "../img/mockups/app-mockup-3.png";
import '../componentcss/AboutApp.css';
class AboutApp extends Component {
  render() {
    return (
      <div className="AboutApp">
        <section id="app-about-area" class="gray-bg ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-heading shape-2 text-center">
                            <h2>ABOUT OUR APP</h2>
                            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="about-app mt-100">
                            <h3>Take a Look Around our App</h3>
                            <p>Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound. mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system expound. expound. mistaken idea of denouncing</p>
                            <p>the and expound the actual teachings of the great explorer of the truth, the aster of human happiness. NoM one rejects, dislikes, teachings of the great explorer of the ruth, master of human happiness.</p>
                            <div className="button-group store-buttons">
                                <a href="#" className="btn btn-style-2 btn-bordered-grad">
                                    <i className="icofont icofont-brand-android-robot dsp-tc"></i>
                                    <p className="dsp-tc">available on       <br/> <span>Google Store</span></p>
                                </a>
                                <a href="#" className="btn btn-style-2 btn-bordered-grad">
                                    <i className="icofont icofont-brand-apple dsp-tc"></i>
                                    <p className="dsp-tc">available on
                                        <br/> <span>Apple Store</span></p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 hidden-xs wow fadeIn">
                        <div className="about-app-mockup">
                            <img src={appm_3} alt="" className="img-responsive"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default AboutApp;
