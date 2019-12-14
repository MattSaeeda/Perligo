import React, { Component } from "react";
import { Button} from 'reactstrap';

class Photo extends Component {
      render() {
            const post = this.props.post;
            return  <figure className="figure">
                  <img className = "photo" src={post.imageLink}/>
                  <figcaption>
                        <h4>{post.name}</h4>
                        <h5>Address: {post.address}</h5>
                        <p>Review: {post.review}</p>
                  </figcaption>
                  <div className="button-container">
                  <Button className="button-group" outline color="primary" onClick = {() => {this.props.upVote(post)}}>Upvote</Button>
                  <Button className="button-group" outline color="primary" onClick = {() => {this.props.downVote(post)}}>Downvote</Button>
                  <Button className="button-group" outline color="primary" onClick = {() => {this.props.addComment(post)}}>Comment</Button>
                  </div>
            </figure> 
      }
}

export default Photo;