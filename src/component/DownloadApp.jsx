import React, { Component } from 'react';
import vid_demo from "../img/others/video-demo.jpg";
import '../componentcss/DownloadApp.css';
class DownloadApp extends Component {
  render() {
    return (
      <div className="DownloadApp">
        <section id="app-download-area" class="home-style-2 blue-grad-bg-2 ptb-120">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="download-app">
                            <h1>Download Appai Today</h1>
                            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                            <div class="button-group store-buttons">
                                <a href="#" class="btn btn-style-2 btn-bordered-white">
                                    <i class="icofont icofont-brand-android-robot dsp-tc"></i>
                                    <p class="dsp-tc">available on <br/> <span>Google Store</span></p>
                                </a>
                                <a href="#" class="btn btn-style-2 btn-bordered-white">
                                    <i class="icofont icofont-brand-apple dsp-tc"></i>
                                    <p class="dsp-tc">available on
                                        <br/> <span>Apple Store</span></p>
                                </a>
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

export default DownloadApp;
