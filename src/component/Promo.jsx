import React, { Component } from 'react';
import vid_demo from "../img/others/video-demo.jpg";
import '../componentcss/Promo.css';

class Promo extends Component {
  render() {
    return (
      <div className="Promo">
        <div id="promo-video-area">
            <div className="container">
                <div className="video-demo-image wow fadeIn" data-wow-duration="2s">
                    <div className="overlay-grad-two">
                        <img src={vid_demo} alt="" className="img-responsive center-block"/>
                    </div>
                    <div className="video-play-icon">
                        <a href="http://www.youtube.com/watch?v=k-R6AFn9-ek"><i className="icofont icofont-ui-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Promo;
