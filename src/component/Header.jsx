import React, { Component } from 'react';

import '../componentcss/Header.css';
import logo2 from '../img/logo/logo-2.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        
        <header className="home-style-2">
            <nav className="navbar navbar-fixed-top" data-spy="affix" data-offset-top="1">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><img src={logo2} alt="logo" className="img-responsive"/></a>
                    </div>
                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="#page-top">Home</a></li>
                            <li><a href="#app-about-area">About</a></li>
                            <li><a href="#awesome-features-area">Features</a></li>
                            <li><a href="#app-screenshot-area">Screenshots</a></li>
                            <li><a href="#pricing-table-area">Pricing</a></li>
                            <li><a href="#faq-area">FAQs</a></li>
                            <li><a href="#blog-area">Blog</a></li>
                            <li><a href="#contact-area">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </header>
      </div>
    );
  }
}

export default Header;
