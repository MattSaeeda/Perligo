import React, { Component } from 'react';
import { Button, Input,  Card, CardImg, CardText, CardBody,
      CardTitle, CardSubtitle } from 'reactstrap';
import Photo from "./Photo.js";
import {Link} from 'react-router-dom'

class RecentPosts extends Component {

      render() {
        return (
            <div><h6>Click the plus sign below to add a review</h6>
            <Link  className = "add-icon"  to="/addPost"></Link>
            
                  <div className="photo-grid">
                        {this.props.posts.map((post, index) => <Photo key={index} post={post} upVote = {this.props.upVote}
                        downVote = {this.props.downVote} addComment = {this.props.addComment} />)}
                  </div>
            </div>   
        );
    };
};

export default RecentPosts;