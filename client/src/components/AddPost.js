import React, { Component } from 'react';

class AddPost extends Component {

      constructor() {
            super()
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
            event.preventDefault();
            const imageLink = event.target.elements.link.value;
            const bName = event.target.elements.businessName.value;
            const bAddress = event.target.elements.address.value;
            const bReview = event.target.elements.review.value;
            const post = {
                  id: 0,
                  name: bName,
                  address: bAddress,
                  review: bReview,
                  imageLink: imageLink,
                  upVote: 0,
                  downVote: 0,
                  comment: "",
                  commentBody: ""

            }
            if(imageLink && bName && bAddress && bReview) {
                  this.props.onAddPost(post);
            }

      }
      render() {
            
            return (
            <div> 
                  <h1>Add A Reviews</h1>
                  <div className = "form">
                        <form onSubmit = {this.handleSubmit}>
                              <input type = "text" placeholder="Link to the photo" name="link"/> 
                              <input type = "text" placeholder="Name" name="businessName"/> 
                              <input type = "text" placeholder="Address" name="address"/> 
                              <input type = "text" placeholder="Your review" name="review"/> 
                              <button>Post</button>
                        </form>
                  </div>
            </div>

            )
      }
}

export default AddPost;
