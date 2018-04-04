import React, { Component } from 'react';
import Clearfix from 'react-clearfix';

import './App.css';
import Header from './component/Header';
import Sliderarea1 from './component/SliderArea1';
import Appfeatures from './component/AppFeatures';
import AboutApp from './component/AboutApp';
import WorkingExp from './component/WorkingExp';
import AwesomeFeatures from './component/AwesomeFeatures';
import Promo from './component/Promo';
import Accounts from './component/Accounts';
import AppScreenShots from './component/AppScreenShots';
import AwesomeTeam from './component/AwesomeTeam';
import Testimonials from './component/Testimonials';
import PricingTable from './component/PricingTable';
import FAQ from './component/FAQ';
import DownloadApp from './component/DownloadApp';
import Blog from './component/Blog';
import Subscription from './component/Subscription';
import MapArea from './component/MapArea';
import Footer from './component/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="preloader-wrapper">
        <div className="preloader-wave-effect"></div>
    </div>
        <div id="page-top" className="wrapper">
        <Header /> 
        <Sliderarea1/> 
        <Appfeatures/>  
        <AboutApp/> 
        <WorkingExp/> 
        <AwesomeFeatures/> 
        <Promo/> 
        <Accounts/> 
        <AppScreenShots/>
        <AwesomeTeam/> 
        <Testimonials/>
        <PricingTable/>
        <FAQ/>
        <DownloadApp/>
        <Blog/>
        <Subscription/>
        <MapArea/>
        <Footer/>  
        </div>
      </div>
    );
  }
}

export default App;
