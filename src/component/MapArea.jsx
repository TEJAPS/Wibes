import React, { Component } from 'react';
import '../css/MapArea.css';


class MapArea extends Component {
 constructor(props){
     super(props);
     this.initMap = this.initMap.bind(this);
 }

 componentWillMount(){
const script = document.createElement("script");
    script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDoGzvBEdXCPR4rZR_DqbOmy4il__1oOxc&callback=initMap";
    script.async = true;
    document.body.appendChild(script);
    
 }


 initMap() {
    const google = window.google;
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }



  render() {
      const sommap = 
         <section id="contact-area">
         
        <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDoGzvBEdXCPR4rZR_DqbOmy4il__1oOxc&callback=initMap">
        </script>
              <div id="map" ></div>
              <div className="contact-box home-style-2">
                  <div className="container">
                      <div className="contact-box-inner">
                          <div className="row">
                              <div className="col-sm-7">
                                  <div className="get-in-touch p-100">
                                      <h2>Get in Touch</h2>
                                      <form id="appai-contact-form" action="http://marveltheme.com/tf/html/appai/appai/php/mail.php" method="POST" name="appai_message_form">
                                          <div className="form-group">
                                              <input type="text" name="your_name" className="form-control" id="name" placeholder="Your Name*" required/>
                                              <div className="form-grad-border"></div>
                                          </div>
                                          <div className="form-group">
                                              <input type="email" name="your_mail" className="form-control" id="email" placeholder="Email Address*" required/>
                                              <div className="form-grad-border"></div>
                                          </div>
                                          <div className="form-group">
                                              <input type="text" name="your_subject" className="form-control" placeholder="Your Subject"/>
                                              <div className="form-grad-border"></div>
                                          </div>
                                          <div className="form-group">
                                              <textarea name="your_message" className="form-control" rows="3" placeholder="Write Message*" required></textarea>
                                              <div className="form-grad-border"></div>
                                          </div>
                                          <button type="submit" className="btn btn-style-2">SEND MESSAGE</button>
                                          <p className="appai-form-send-message"></p>
                                      </form>
                                  </div>
                              </div>
                              <div className="col-sm-5">
                                  <div className="address-box p-100">
                                      <h2>Address</h2>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                      <ul className="address-info">
                                          <li className="phone-number">
                                              <div className="info-icon dsp-tc">
                                                  <i className="icofont icofont-phone"></i>
                                              </div>
                                              <div className="info-details dsp-tc">
                                                  <p>+0044 545 989 626</p>
                                              </div>
                                          </li>
                                          <li className="email-address">
                                              <div className="info-icon dsp-tc">
                                                  <i className="icofont icofont-paper-plane"></i>
                                              </div>
                                              <div class="info-details dsp-tc">
                                                  <p>marveltheme@gmail.com</p>
                                              </div>
                                          </li>
                                          <li class="address">
                                              <div class="info-icon dsp-tc">
                                                  <i class="icofont icofont-social-google-map"></i>
                                              </div>
                                              <div class="info-details dsp-tc">
                                                  <p>28 Green Tower, Street Name
                                                      <br/>New York City, USA</p>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> ;
    return (
        <div className="MapArea">
        {sommap}
      </div>
    );
  }
}

export default MapArea;
