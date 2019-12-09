import React, { Component } from "react";
import Footer from "../src/components/Footer.js";
import Header from "../src/components/Header.js";
import RecentPosts from "../src/components/RecentPosts";
import PostAReview from "../src/components/PostAReview";
import CarouselBar from "../src/components/CarouselBar";
import Stats from "../src/components/Stats";

//import getWeb3 from "./getWeb3";

//import "./App.css";




class App extends Component {
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
                id: "0",
                name:"Great Wall Eatery",
                address:'1 Bloor Street, Toronto, Ontario',
                review: "Great location, Tasty food but a little overcrowded. I really likes their Sushi",
                imageLink: "https://cdn.pixabay.com/photo/2017/03/02/20/53/sushi-2112350_1280.jpg"
                },
                {
                id: "1",
                name:"Milan Pizzeria",
                address:"2 Bay Street",
                review:"Best place to have a delicious pizza. I specifically loved their pepperony. Good prices too. You won't go wrong with this.",
                imageLink: "https://cdn.pixabay.com/photo/2019/09/08/19/13/pistoia-4461681_1280.jpg"
                },
                {
                id: "2",
                name: "Sunset Restaurant",
                address: "34 Front Street",
                review: "If you love tasty soups, this the place to go. It's clean, tidy and big. Workers are a bit impolite though ",
                imageLink: "https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793_1280.jpg"
                }]
      }
    }


  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div className="App">

        <Header/><br></br>
        <CarouselBar/>
        <p> <br></br></p>
        <RecentPosts posts={this.state.posts}/>
        <PostAReview/>
        <Stats/>
        <Footer />
      </div>
    );
  }
}

export default App;
//All images are from Pixabay.
