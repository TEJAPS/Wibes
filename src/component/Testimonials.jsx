import React, { Component } from 'react';
import testmon1 from "../img/clients/client-1.jpg";
import '../componentcss/Testimonials.css';
import Testimony from '../TooSmallParts/Testimony';

class Testimonials extends Component {
  render() {
    return (
      <div classNameName="Testimonials">
        <section id="testimonial-area" className="home-style-2 ptb-120">
            <div className="testimonial-slider-2">
                <Testimony image={testmon1} username="Jason Adams" occupation="Mast Designer" 
                    description=" “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incubt consectetur aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut com modo consequat. Duis aute irure dolor in reprehenderit.” "
                />
               <Testimony image={testmon1} username="Jason Adams" occupation="Mast Designer" 
                    description=" “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incubt consectetur aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut com modo consequat. Duis aute irure dolor in reprehenderit.” "
                />
            </div>
        </section>
      </div>
    );
  }
}

export default Testimonials;
