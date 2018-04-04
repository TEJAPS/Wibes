import React, { Component } from 'react';
import '../componentcss/Subscription.css';

class Subscription extends Component {
  render() {
    return (
      <div className="Subscription">
        <section id="subscribe-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="subscribe-wrapper home-style-2 ptb-40">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="subscribe-text">
                                        <h2>Subscribe Now</h2>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="subscribe-box">
                                        <form className="subscription-form" method="POST" action="http://marveltheme.com/tf/html/appai/appai/php/subscribe.php">
                                            <input type="email" className="form-control" id="subscribe-input" name="subscribe-input" placeholder="Enter Your Email Address"/>
                                            <button className="email-submit-btn" type="submit"><i className="icofont icofont-paper-plane"></i></button>
                                        </form>
                                    </div>
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

export default Subscription;
