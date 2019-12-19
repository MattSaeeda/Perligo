import React from "react";
import { Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function Photo(props) {
     // console.log(this.props.posts);

            const post = props.post;
            return  <figure className="figure">
                  <Link to={`/single/${post.id}`}> <img className = "photo" src={post.imageLink} alt={post.name}/></Link>
                 
                  <figcaption>
                        <h4>{post.name}</h4>
                        <h5>Address: {post.address}</h5>
                        <p>Review: {post.review}</p>
                  </figcaption>
                  <div className="button-container">
                  <Button className="button-group" outline color="primary" onClick = {() => {props.upVote(this.props.index)}}>Upvote</Button>
                  <Button className="button-group" outline color="primary" onClick = {() => {}}>Downvote</Button>
                  <Button className="button-group" outline color="primary" onClick = {() => {}}>Comment</Button>
                  <Link className="button" to={`/single/${post.id}`}>
                        <div>
                              {props.comments[post.id]  ?  props.comments[post.id].length : 0}
                              {console.log()}
                        </div>
                  </Link>
                  </div>
            </figure> 
      
}

export default Photo;