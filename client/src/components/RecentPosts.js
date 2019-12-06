import React, { Component } from 'react';
import { Button, Input,  Card, CardImg, CardText, CardBody,
      CardTitle, CardSubtitle } from 'reactstrap';

class RecentPosts extends Component {

      render() {
        return (
            <div>
                <h4>Recent Reviews</h4>
                <Card >
                      <CardBody>
                            <CardTitle body className="text-left">Great Wall Eatery</CardTitle>
                            <CardSubtitle body className="text-left">1 Bloor Street, Toronto, Ontario</CardSubtitle>
                            <CardText body className="text-left">Great location, Tasty food but a little overcrowded. I really 
                            Liked their grills.</CardText>
                            <Button>Like</Button>&nbsp;
                            <Button>Dislike</Button>&nbsp;
                            <Button>Comment</Button>
                       </CardBody>
                </Card>

                <Card >
                      <CardBody>
                            <CardTitle body className="text-left">Milan Pizzeria</CardTitle>
                            <CardSubtitle body className="text-left">2 Bay Street, Toronto, Ontario</CardSubtitle>
                            <CardText body className="text-left">Best place to have a delicious pizza. I specifically loved their
                            pepperony. Good prices too. You won't go wrong with this.</CardText>
                            <Button>Like</Button>&nbsp;
                            <Button>Dislike</Button>&nbsp;
                            <Button>Comment</Button>
                       </CardBody>
                </Card>
                

            </div>
        );
    };
};
export default RecentPosts;