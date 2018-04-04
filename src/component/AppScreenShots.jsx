import React, { Component } from 'react';
import vid_demo from "../img/others/video-demo.jpg";
import '../componentcss/AppScreenShots.css';
import ss7 from "../img/app-screenshots/7.jpg";
import ss6 from "../img/app-screenshots/6.jpg";
import ss5 from "../img/app-screenshots/5.jpg";
import ss8 from "../img/app-screenshots/8.jpg";
import ss9 from "../img/app-screenshots/9.jpg";
class AppScreenShots extends Component {
  render() {
    return (
      <div className="AppScreenShots">
        <section id="app-screenshot-area" className="home-style-2 ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-heading shape-2 text-center">
                            <h2>APP Screenshots</h2>
                            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/*<!-- Swiper -->*/}
                    <div className="swiper-container two">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="slider-image">
                                    <img src={ss7} alt="" className="img-responsive"/>
                                    <div className="preview-icon">
                                        <a href="img/app-screenshots/7.jpg"><i className="icofont icofont-image"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider-image">
                                    <img src={ss6} alt="" className="img-responsive"/>
                                    <div className="preview-icon">
                                        <a href="img/app-screenshots/6.jpg"><i className="icofont icofont-image"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider-image">
                                    <img src={ss5} alt="" className="img-responsive"/>
                                    <div className="preview-icon">
                                        <a href="img/app-screenshots/5.jpg"><i className="icofont icofont-image"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider-image">
                                    <img src={ss8} alt="" className="img-responsive"/>
                                    <div className="preview-icon">
                                        <a href="img/app-screenshots/8.jpg"><i className="icofont icofont-image"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider-image">
                                    <img src={ss9} alt="" className="img-responsive"/>
                                    <div className="preview-icon">
                                        <a href="img/app-screenshots/9.jpg"><i className="icofont icofont-image"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Add Pagination -->*/}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default AppScreenShots;
