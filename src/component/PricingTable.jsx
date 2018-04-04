import React, { Component } from 'react';
import vid_demo from "../img/others/video-demo.jpg";
import '../componentcss/PricingTable.css';
class PricingTable extends Component {
  render() {
    return (
      <div className="PricingTable">
        <section id="pricing-table-area" class="overlay-white ptb-120">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="section-heading shape-2 text-center">
                            <h2>PRICING TABLE</h2>
                            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                        </div>
                    </div>
                </div>
                <div class="pricing-table-style-2 row">
                    <div class="col-md-4 col-sm-4 wow fadeIn" data-wow-duration="2s">
                        <div class="single-price-table one text-center transition-3s">
                            <div class="pricing-head">
                                <div class="price-tage-wrap">
                                    <h1 class="price-value transition-3s"><sub class="doller-sign">$</sub>20<sub class="duration"> /Month</sub></h1>
                                </div>
                                <h5 class="plan-title blue-grad-bg-2">BASIC</h5>
                            </div>
                            <div class="pricing-content">
                                <ul class="table-content">
                                    <li>100 MB Disk Space</li>
                                    <li>2 Subdomains</li>
                                    <li>5 Email Accounts</li>
                                    <li>Webmail Support</li>
                                </ul>
                            </div>
                            <div class="pricing-footer transition-3s">
                                <p class="transition-3s">(Save 20 USD)</p>
                                <a class="btn btn-style-2 btn-bordered-grad" href="#">purchase</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div class="single-price-table two text-center transition-3s">
                            <div class="pricing-head">
                                <div class="price-tage-wrap">
                                    <h1 class="price-value transition-3s"><sub class="doller-sign">$</sub>39<sub class="duration"> /Month</sub></h1>
                                </div>
                                <h5 class="plan-title blue-grad-bg-2">STANDARD</h5>
                            </div>
                            <div class="pricing-content">
                                <ul class="table-content">
                                    <li>100 MB Disk Space</li>
                                    <li>2 Subdomains</li>
                                    <li>5 Email Accounts</li>
                                    <li>Webmail Support</li>
                                </ul>
                            </div>
                            <div class="pricing-footer transition-3s">
                                <p class="transition-3s">(Save 20 USD)</p>
                                <a class="btn btn-style-2 btn-bordered-grad" href="#">purchase</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div class="single-price-table four text-center transition-3s">
                            <div class="pricing-head">
                                <div class="price-tage-wrap">
                                    <h1 class="price-value transition-3s"><sub class="doller-sign">$</sub>199<sub class="duration"> /Year</sub></h1>
                                </div>
                                <h5 class="plan-title blue-grad-bg-2">UNLIMITED</h5>
                            </div>
                            <div class="pricing-content">
                                <ul class="table-content">
                                    <li>100 MB Disk Space</li>
                                    <li>2 Subdomains</li>
                                    <li>5 Email Accounts</li>
                                    <li>Webmail Support</li>
                                </ul>
                            </div>
                            <div class="pricing-footer transition-3s">
                                <p class="transition-3s">(Save 20 USD)</p>
                                <a class="btn btn-style-2 btn-bordered-grad" href="#">purchase</a>
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

export default PricingTable;
