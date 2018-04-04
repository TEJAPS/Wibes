import React, { Component } from 'react';
import '../componentcss/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer id="footer-area" className="home-style-2">
            <div className="container">
            
                <ul className="social list-inline text-center home-style-2 pt-60">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    
                </ul>
                <div className="copyright text-center">
                    <p>Copyright @ 2017 <a href="http://marveltheme.com/" target="_blank">marveltheme</a> all right reserved.</p>
                </div>
            </div>
        </footer>
       
 
      </div>
    );
  }
}

export default Footer;
