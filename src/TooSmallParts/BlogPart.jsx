import React, { Component } from 'react';

class BlogPost extends Component {
  render() {
    return (        
        <div className=" BlogPost col-md-4 col-sm-6">
            <article className="blog-post">
                <div className="post-thumbnail">
                    <a href="blog-details-left-sidebar.html">
                        <img src={this.props.image} alt="" className="img-responsive center-block"/>
                    </a>
                </div>
                <div className="post-content">
                    <div className="post-content-inner">
                        <ul className="meta-info list-inline">
                            <li className="posted-by">By <a href="#">{this.props.username}</a></li>
                            <li className="post-date"><a href="#">{this.props.date}</a></li>
                            <li className="comments-quantity"><a href="#">{this.props.subtitle}</a></li>
                        </ul>
                        <h5 className="post-title"><a href="blog-details-left-sidebar.html">{this.props.maintitle}</a></h5>
                        <p>{this.props.content}</p>
                    </div>
                    <div className="read-more-wrapper">
                        <a href="blog-details-left-sidebar.html" className="read-more-btn">Read More <i className="icofont icofont-long-arrow-right"></i></a>
                    </div>
                </div>
            </article>
        </div>
    );
  }
}

export default BlogPost;
