import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Header extends Component {

      render() {
        return (
            <div>
                <h2>  &nbsp;PERLIGO</h2>
                
                <h3>  &nbsp;An app to post reviews on any services and businesses and earn cryptocurrency</h3>
                <Button outline color="primary">About</Button>{' '}
                <Button outline color="primary">Add User</Button>{' '}
                <Button outline color="primary">Remove User</Button>{' '} 
                <p> <br></br></p>
                <Input placeholder="Search businesses or service providers" />
            </div>
        );
    };
};
export default Header;