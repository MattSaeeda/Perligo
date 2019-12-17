import React, { Component } from 'react';
import { CardBody,Card, Badge} from 'reactstrap';

class Stats extends Component {

      render() {
        return (
            <div>
                <h4>  &nbsp;Your Today's Scores</h4>

                <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}><br/>
                {/* <h6 className="text-left"> &nbsp; &nbsp; Sign in to see your scores:</h6> */}
                      <CardBody body className="text-left">
                      {/* <InputGroup>
                              <InputGroupAddon addonType="prepend"><Button>Sign in</Button></InputGroupAddon>
                              <Input />
                      </InputGroup> */}
                              <h5>Posting Score: <Badge color="primary">3</Badge></h5>
                              <h5>Commenting Score: <Badge color="primary">25</Badge></h5>
                              <h5>Voting Score:  <Badge color="primary">45</Badge></h5>
                              <h5>You spent <Badge color="primary">12</Badge> Fama points.</h5>
                              <h5>You have <Badge color="primary">8</Badge> Fama points remaining.</h5>
                              <h5>You earned <Badge color="primary">25</Badge> Pearl coins yesterday.</h5>
                      </CardBody>
                </Card>

            </div>
        );
    };
};
export default Stats;