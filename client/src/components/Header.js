import React, { Component } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, ButtonGroup } from 'reactstrap';
import AboutModal from './AboutModal';

class Header extends Component {
    

      render() {
        return (
            <div>
                
                <h3>  &nbsp;An app to post reviews on any services and businesses and earn cryptocurrency</h3>
                <div>
                <ButtonGroup>
                <AboutModal/>&nbsp;
                <Button outline color="primary">Add User</Button>{' '}&nbsp;
                <Button outline color="primary">Remove User</Button>{' '}&nbsp;
                 <br/>
                </ButtonGroup>
                </div>
                <br/>
                <Input placeholder="Search businesses or service providers" /> <br/>
                
                    
                    <Button outline color="primary" ><Input />Sign in</Button>{' '} 
                    
                
            </div>
        );
    };
};
export default Header;