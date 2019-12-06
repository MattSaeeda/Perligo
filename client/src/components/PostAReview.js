import React, { Component } from 'react';
import {Card, CardImg,Col,Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

class PostAReview extends Component {

      render() {
        return (
            <div>
                <h4>Post a Review</h4>
                <Card >
                      <Form className="text-left">
                            <FormGroup row >
                                    <Label for="BusinessName" sm={2}>Business name:</Label>
                                    <Col sm={6}>
                                          <Input type="text" name="name" id="business" placeholder="name" />
                                    </Col>
                            </FormGroup>

                            <FormGroup row>
                                    <Label for="BusinessAddress" sm={2}>Business address:</Label>
                                    <Col sm={10}>
                                          <Input type="text" name="name" id="business address" placeholder="address" />
                                    </Col>
                            </FormGroup>

                            <FormGroup row>
                                    <Label for="Review" sm={2}>Your review:</Label>
                                    <Col sm={10}>
                                          <Input type="textarea" name="review" id="business" placeholder="Maximum 1000 character" />
                                    </Col>
                            </FormGroup>
                            <Button>Submit</Button>
                      </Form>

                </Card>


                

            </div>
        );
    };
};
export default PostAReview;