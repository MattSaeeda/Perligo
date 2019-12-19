import React, { Component } from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import RecentPosts from "./RecentPosts";
import CarouselBar from "./CarouselBar";
import Stats from "./Stats";
import AddPost from "./AddPost";
import {Route} from 'react-router-dom';
import {upVote} from "../redux/actions";
import {Link} from 'react-router-dom';
import Single from "./Single";
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
 }

   componentDidMount() {
   this.props.upVote(1);
   }

    // upVote(postVoted) {
    //   console.log(postVoted.name);
    //   //this.setState({posts.upVote: postVoted.upVote + 1});
    //   console.log(postVoted.upVote + 1);
    // }

    // downVote(postVoted) {
    //   console.log(postVoted.name);

    // }

    // addComment(postCommented) {
    //   console.log(postCommented.name);

    // }

    // addPost(postSubmitted) {
    //   this.setState(state => ({
    //     posts: state.posts.concat([postSubmitted])
    //   }))
    // }


  render() {
   
    return (
      <div>
          <h1>
            <Link to='/'>Perligo</Link>
          </h1>
          <Route exact path = "/" render={() => (

          
          <div>
                <Header/><br></br>
                <CarouselBar/>
                <p> <br></br></p>
                <RecentPosts posts={this.props.posts} {...this.props}/>
                {/* <RecentPosts posts={this.state.posts} upVote={this.upVote} downVote={this.downVote} addComment={this.addComment} /> */}
                {/* <PostAReview/> */}
                <Stats/>
                <Footer />
                
          </div>
       
            )}/>

          <Route path = "/addPost" render  = {({history}) =>  (<AddPost {...this.props} onHistory={history}/>)}/>
        
            <Route path = "/single/:id" render = {(params) => (<Single {...this.props} {...params} />)}/>

      </div>)
    
  }
}

export default Main;
//All images are from Pixabay.
