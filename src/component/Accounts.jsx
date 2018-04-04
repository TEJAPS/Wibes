import React, { Component } from 'react';
import '../componentcss/Accounts.css';

class Accounts extends Component {
  render() {
    return (
      <div className="Accounts">
        <section id="fun-fact-area" className="overlay-grad-two ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="single-fact text-center">
                            <i className="icofont icofont-safety"></i>
                            <h5>APP DOWNLOADS</h5>
                            <h2 className="counter">1200</h2>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="single-fact text-center">
                            <i className="icofont icofont-heart-alt"></i>
                            <h5>HAPPY CLIENTS</h5>
                            <h2 className="counter">1080</h2>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="single-fact text-center">
                            <i className="icofont icofont-boy"></i>
                            <h5>ACTIVE ACCOUNTS</h5>
                            <h2 className="counter">1170</h2>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="single-fact text-center">
                            <i className="icofont icofont-star"></i>
                            <h5>TOTAL APP RATES</h5>
                            <h2 className="counter">720</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
      </div>
    );
  }
}

export default Accounts;
