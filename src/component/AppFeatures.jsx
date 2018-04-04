import React , {Component} from 'react';
import '../componentcss/AppFeature.css';
import appf_1 from "../img/icons/app-feature-1.png";
import appf_2 from "../img/icons/app-feature-2.png";
import appf_3 from "../img/icons/app-feature-3.png";
import appf_4 from "../img/icons/app-feature-4.png";

class AppFeatures extends Component{
    render(){
        return (
               <div className="AppFeatures" >
                <section id="app-features-area" class="home-style-2 ptb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 p-0 wow fadeIn" data-wow-duration="2s">
                                <div className="single-feature feature-style-2">
                                    <div className="feature-icon">
                                        <img src={appf_1} alt=""/>
                                    </div>
                                    <div className="feature-details">
                                        <h5 className="text-uppercase">easy to use</h5>
                                        <p>Lorem ipsum dolor sit consectet aadop adipisicing elit, sed do eiusod aemporaryly ididunt ugt laborepsu silmply dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 p-0 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="single-feature feature-style-2">
                                    <div className="feature-icon">
                                        <img src={appf_2} alt=""/>
                                    </div>
                                    <div className="feature-details">
                                        <h5 className="text-uppercase">Awesome design</h5>
                                        <p>Lorem ipsum dolor sit consectet aadop adipisicing elit, sed do eiusod aemporaryly ididunt ugt laborepsu silmply dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 p-0 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                <div className="single-feature feature-style-2">
                                    <div className="feature-icon">
                                        <img src={appf_3} alt=""/>
                                    </div>
                                    <div className="feature-details">
                                        <h5 className="text-uppercase">EASY TO CUSTOMIZE</h5>
                                        <p>Lorem ipsum dolor sit consectet aadop adipisicing elit, sed do eiusod aemporaryly ididunt ugt laborepsu silmply dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 p-0 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                <div className="single-feature feature-style-2">
                                    <div className="feature-icon">
                                        <img src={appf_4} alt=""/>
                                    </div>
                                    <div className="feature-details">
                                        <h5 className="text-uppercase">24/7 Online Support</h5>
                                        <p>Lorem ipsum dolor sit consectet aadop adipisicing elit, sed do eiusod aemporaryly ididunt ugt laborepsu silmply dolor sit amet.</p>
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

export default AppFeatures;