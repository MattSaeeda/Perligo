import React, { Component } from "react";
import { Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Photo extends Component {
     // console.log(this.props.posts);
      render() {
            console.log(this.props.posts);
            const post = this.props.post;
            return  <figure className="figure">
                  <Link to={`/single/${post.id}`}> <img className = "photo" src={post.imageLink} alt={post.name}/></Link>
                 
                  <figcaption>
                        <h4>{post.name}</h4>
                        <h5>Address: {post.address}</h5>
                        <p>Review: {post.review}</p>
                  </figcaption>
                  <div className="button-container">
                  <Button className="button-group" outline color="primary" onClick = {() => {this.props.upVote(this.props.index)}}>Upvote</Button>
                  <Button className="button-group" outline color="primary" onClick = {() => {}}>Downvote</Button>
                  <Button className="button-group" outline color="primary" onClick = {() => {}}>Comment</Button>
                  </div>
            </figure> 
      }
}

export default Photo;