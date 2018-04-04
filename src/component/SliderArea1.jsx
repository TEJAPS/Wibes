import React ,{Component } from 'react';
import ReactDom from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import '../componentcss/SliderArea1.css';
import SwiperSlideImage from '../TooSmallParts/SwiperSlideImage';
import i10  from "../img/app-screenshots/10.jpg";
import i11  from "../img/app-screenshots/12.jpg";
import i12  from "../img/app-screenshots/11.jpg";



class SliderArea1 extends Component{
    render(){
        return (
        <div className="SliderArea1">
         <section id="slider-area" className="home-style-5 overlay-dark video-background-area home-style-8">
            <div id="video-background"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="promo-header-area text-center">
                            <h2 className="animated fadeInDown wow" data-wow-delay="1s">Built for </h2>
                            <h1 className="animated fadeInDown wow" data-wow-delay="1.5s">Passionate People</h1>
                            <p className="animated fadeInDown wow" data-wow-delay="2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                            <a href="#" className="btn btn-style-2 animated fadeInDown wow" data-wow-delay="2.5s">Download</a>
                            {/*<!-- Swiper -->*/}
                            <div className="swiper-container one animated fadeInUp wow" data-wow-delay="3s">
                                <div className="swiper-wrapper">
                                    <SwiperSlideImage source={i10}/>
                                    <SwiperSlideImage source={i11}/>
                                    <SwiperSlideImage source={i12}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<Carousel showThumbs={false} axis='horizontal'>
                <div className="a">
                    <img src={i10} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="a">
                    <img src={i11} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="a">
                    <img src={i12} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        */}

        </div>
        );
    }
}

export default SliderArea1;