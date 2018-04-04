import React, { Component } from 'react';
import blog1 from "../img/blog/1.jpg";
import blog2 from "../img/blog/2.jpg";
import blog3 from "../img/blog/3.jpg";
import '../componentcss/Blog.css'
import BlogPart from '../TooSmallParts/BlogPart';
class Blog extends Component {
  render() {
     
    return (
      <div className="Blog">
        <section id="blog-area" className="home-style-2 ptb-120">
            <div className="container">
            <div className="row">
                    <div className="col-sm-12">
                        <div className="section-heading shape-2 text-center">
                            <h2>Latest Blog Post</h2>
                            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                        </div>
                    </div>
            </div>
           <BlogPart username="Admin" image={blog1}
           date="Janu. 15 2017" subtitle="(20) Comments"
           title="How To Showcase your Awesome App?"
           description="Lorem ipsum dolor sit amet, consectetur adiiga elit, abuci sedeiusmod tempor inccsetetur aliquatraiy enimni ad numminim veniam, quis nostrud layers."
           />
           
           
           <BlogPart username="Admin" image={blog2}
           date="Janu. 15 2017" subtitle="(20) Comments"
           title="How To Showcase your Awesome App?"
           description="Lorem ipsum dolor sit amet, consectetur adiiga elit, abuci sedeiusmod tempor inccsetetur aliquatraiy enimni ad numminim veniam, quis nostrud layers."
           />
           
           <BlogPart username="Admin" image={blog3}
           date="Janu. 15 2017" subtitle="(20) Comments"
           title="How To Showcase your Awesome App?"
           description="Lorem ipsum dolor sit amet, consectetur adiiga elit, abuci sedeiusmod tempor inccsetetur aliquatraiy enimni ad numminim veniam, quis nostrud layers."
           />
            </div>
        </section>
      </div>
    );
  }
}

export default Blog;
