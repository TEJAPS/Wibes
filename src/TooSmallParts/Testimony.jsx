import React, { Component } from 'react';


class Testimony extends Component {
  render() {
    return (
      <div className="Testimony">
        <div className="slide">
                    <div className="slider-content text-center">
                        <div className="client-image">
                            <img src={this.props.image} alt="" className="img-responsive img-circle center-block"/>
                        </div>
                        <div className="client-testimonial">
                            <h3> {this.props.username } </h3>
                            <p className="client-designation"> {this.props.occupation} </p>
                            <p className="client-review">{this.props.description}</p>
                        </div>
                    </div>
                </div>
      </div>
    );
  }
}

export default Testimony;
