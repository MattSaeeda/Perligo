import React, { Component } from 'react';
import { Button, Input,  Card, CardImg, CardText, CardBody,
      CardTitle, CardSubtitle } from 'reactstrap';
import Photo from "./Photo.js";
import {Link} from 'react-router-dom'
class RecentPosts extends Component {

      render() {
        return (
            <div><h6 >Click the plus sign below to add a review</h6>
            <Link  className = "add-icon"  to="/addPost"></Link>
            {/* <button onClick={this.props.onNavigate} className="add-icon"> </button> */}
                  <div className="photo-grid">
                        {/* {this.props.posts.sort(function(x , y) {
                              return y.id - x.id;
                        })} */}
                  {/* <h4>Recent Reviews</h4> */}
                  {/* <Card >
                        <CardBody>
                              <CardTitle body className="text-left">Great Wall Eatery</CardTitle>
                              <CardSubtitle body className="text-left">1 Bloor Street, Toronto, Ontario</CardSubtitle>
                              <CardText body className="text-left">Great location, Tasty food but a little overcrowded. I really 
                              Liked their grills.</CardText>
                              <Button>Up Vote</Button>&nbsp;
                              <Button>Down Vote</Button>&nbsp;
                              <Button>Comment</Button>
                        </CardBody>
                  </Card>

                  <Card >
                        <CardBody>
                              <CardTitle body className="text-left">Milan Pizzeria</CardTitle>
                              <CardSubtitle body className="text-left">2 Bay Street, Toronto, Ontario</CardSubtitle>
                              <CardText body className="text-left">Best place to have a delicious pizza. I specifically loved their
                              pepperony. Good prices too. You won't go wrong with this.</CardText>
                              <Button>Up Vote</Button>&nbsp;
                              <Button>Down Vote</Button>&nbsp;
                              <Button>Comment</Button>
                        </CardBody>
                  </Card> */}

                  {this.props.posts.map((post, index) => <Photo key={index} post={post} upVote = {this.props.upVote}
                  downVote = {this.props.downVote} addComment = {this.props.addComment} />)}
                  

                  </div>
            </div>   
        );
    };
};
export default RecentPosts;