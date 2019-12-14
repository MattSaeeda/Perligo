import React, { Component } from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import RecentPosts from "./RecentPosts";
import PostAReview from "./PostAReview";
import CarouselBar from "./CarouselBar";
import Stats from "./Stats";
import AddPost from "./AddPost";
import {Route} from 'react-router-dom';

class Main extends Component {

  constructor() {
    super()
    this.state = {
              posts : [{
                id: "0",
                name:"Great Wall Eatery",
                address:'1 Bloor Street, Toronto, Ontario',
                review: "Great location, Tasty food but a little overcrowded. I really likes their Sushi",
                imageLink: "https://cdn.pixabay.com/photo/2017/03/02/20/53/sushi-2112350_1280.jpg",
                upVote: "0",
                downVote: "0",
                comment: "",
                commentBody: ""
                },
                {
                id: "1",
                name:"Milan Pizzeria",
                address:"2 Bay Street",
                review:"Best place to have a delicious pizza. I specifically loved their pepperony. Good prices too. You won't go wrong with this.",
                imageLink: "https://cdn.pixabay.com/photo/2019/09/08/19/13/pistoia-4461681_1280.jpg",
                upVote: "0",
                downVote: "0",
                comment: "",
                commentBody: ""
                },
                {
                id: "2",
                name: "Sunset Restaurant",
                address: "34 Front Street",
                review: "If you love tasty soups, this the place to go. It's clean, tidy and big. Workers are a bit impolite though ",
                imageLink: "https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793_1280.jpg",
                upVote: "0",
                downVote: "0",
                comment: "",
                commentBody: ""
                }],

      }

    }

    upVote(postVoted) {
    
    }

    downVote(postVoted) {
      
    }

    addComment(postCommented) {
      
    }

    addPost(postSubmitted) {
      this.setState(state => ({
        posts: state.posts.concat([postSubmitted])
      }))
    }


  render() {

    return (
      <div>

          <Route exact path = "/" render={() => (

          
          <div>
                <Header/><br></br>
                <div className = "carousel" ><CarouselBar/></div>
                <p> <br></br></p>
                <RecentPosts posts={this.state.posts} upVote={this.upVote} downVote={this.downVote} addComment={this.addComment} />
                
                <Stats/>
                <Footer />
                
          </div>
       
            )}/>

          <Route path = "/addPost" render  = {({history}) =>  (<AddPost onAddPost = {(addedPost) => {
            this.addPost(addedPost);
            history.push('/');

          }}/>)}/>
        

      </div>)
    
  }
}

export default Main;
//All images are from Pixabay.
