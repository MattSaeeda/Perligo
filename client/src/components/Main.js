import React, { Component } from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import RecentPosts from "./RecentPosts";
import PostAReview from "./PostAReview";
import CarouselBar from "./CarouselBar";
import Stats from "./Stats";
import AddPost from "./AddPost";
import {Route} from 'react-router-dom';
//import getWeb3 from "./getWeb3";

//import "./App.css";




class Main extends Component {
  //state = { storageValue: 0, web3: null, accounts: null, contract: null };

  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     // const networkId = await web3.eth.net.getId();
  //     // const deployedNetwork = SimpleStorageContract.networks[networkId];
  //     // const instance = new web3.eth.Contract(
  //     //   SimpleStorageContract.abi,
  //     //   deployedNetwork && deployedNetwork.address,
  //     // );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance }, this.runExample);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }
  // };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };
  constructor() {
    super()
    this.state = {
              posts : [{
                id: 0,
                name:"Great Wall Eatery",
                address:'1 Bloor Street, Toronto, Ontario',
                review: "Great location, Tasty food but a little overcrowded. I really likes their Sushi",
                imageLink: "https://cdn.pixabay.com/photo/2017/03/02/20/53/sushi-2112350_1280.jpg",
                upVote: 0,
                downVote: 0,
                comment: "",
                commentBody: ""
                },
                {
                id: 1,
                name:"Milan Pizzeria",
                address:"2 Bay Street",
                review:"Best place to have a delicious pizza. I specifically loved their pepperony. Good prices too. You won't go wrong with this.",
                imageLink: "https://cdn.pixabay.com/photo/2019/09/08/19/13/pistoia-4461681_1280.jpg",
                upVote: 0,
                downVote: 0,
                comment: "",
                commentBody: ""
                },
                {
                id: 2,
                name: "Sunset Restaurant",
                address: "34 Front Street",
                review: "If you love tasty soups, this the place to go. It's clean, tidy and big. Workers are a bit impolite though ",
                imageLink: "https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793_1280.jpg",
                upVote: 0,
                downVote: 0,
                comment: "",
                commentBody: ""
                }],
                

      }
      this.addPost = this.addPost.bind(this)

    }

    upVote(postVoted) {
      console.log(postVoted.name);
      //this.setState({posts.upVote: postVoted.upVote + 1});
      console.log(postVoted.upVote + 1);
    }

    downVote(postVoted) {
      console.log(postVoted.name);

    }

    addComment(postCommented) {
      console.log(postCommented.name);

    }

    addPost(postSubmitted) {
      this.setState(state => ({
        posts: state.posts.concat([postSubmitted])
      }))
    }


  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div>

          <Route exact path = "/" render={() => (

          
          <div>
                <Header/><br></br>
                <CarouselBar/>
                <p> <br></br></p>
                <RecentPosts posts={this.state.posts} upVote={this.upVote} downVote={this.downVote} addComment={this.addComment} />
                {/* <PostAReview/> */}
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
