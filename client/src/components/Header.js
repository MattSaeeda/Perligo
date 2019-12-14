import React, { Component } from 'react';
import Web3 from "web3";
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import {ethers} from "ethers";
const web3 = new Web3(window.ethereum);
const rewardsJson = require("../contracts/Rewards.json");
const privateKey = process.env.PRIVATE_KEY;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: "",
            existingUser: ""
        };
        this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
        this.handleSignInChange = this.handleSignInChange.bind(this);
        this.handleSignUpChange = this.handleSignUpChange.bind(this);
    }

    handleSignInSubmit(event) {
        event.preventDefault();
    }

    async  handleSignUpSubmit(event) {
        const contractAddress = '0x6b2f058b828bf37105441e25bd506f59656ffec3'
        let wallet1 = new ethers.Wallet(privateKey);
        let provider = ethers.getDefaultProvider('rinkeby');
        wallet1 = wallet1.connect(provider)
        const abi = rewardsJson.abi;
        let contractWithSigner = new ethers.Contract(contractAddress, abi, wallet1)
        let tx = await contractWithSigner.addMinters(this.state.newUser);
        await tx.wait()
        this.setState({newUser: ""});
    };

    handleSignUpChange(event){
        this.setState({newUser: event.target.value});
    }

    handleSignInChange(event) {
        this.setState({existingUser: event.target.value});
    }
    

      render() {
        return (
            <div>
                <h2>PERLIGO</h2>
                
                <h3>  &nbsp;An app to post reviews on any services and businesses and earn cryptocurrency</h3>
                
                <div >
                    <p> <br></br></p>
                    <Input placeholder="Search businesses or service providers" /> 
                </div>

                <div className= "iForm"><br/>
                    <InputGroup >
                        <InputGroupAddon addonType="prepend"><Button onClick={this.handleSignUpSubmit}>Sign up</Button></InputGroupAddon>
                        <Input onChange={this.handleSignUpChange}/>
                    </InputGroup> <br/>

                    <InputGroup>
                        <InputGroupAddon addonType="prepend"><Button onClick={this.handleSignInSubmit}>Sign in</Button></InputGroupAddon>
                        <Input onChange={this.handleSignInChange}/>
                    </InputGroup> <br/>
                </div>

                <p>Reward contract address: 0x6b2f058b828bf37105441e25bd506f59656ffec3</p>
                <p>Perligo contract address:</p>
                <p>On Rinkeby network</p>        
            </div>
        );
    };
};

export default Header;