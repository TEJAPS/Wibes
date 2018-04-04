import React, { Component } from 'react';


class SwiperSlideImage extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
        <div className="swiper-slide">
            <img src={this.props.source} alt="" className="img-responsive"/>
        </div>
    );
  }
}

export default SwiperSlideImage;
