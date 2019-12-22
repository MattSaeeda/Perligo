import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AboutModal = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>About</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>About Perligo</ModalHeader>
        <ModalBody>
        This is an decentralized application based on Ethereum blockchain to leave reviews about services offered by  various businesses, like restaurants, shops or even airlines. In this application, upon posting a review, the reviewer will be rewarded by a digital tokens called "Pearl" as incentives. Users can also upvote, downvote or comment on  reviews and get rewarded as well.  
Most of the times, consumers leave a review about any service the receive when they are not satisfied,or extremely satisfied;  and if they are, there is no reward for spending time to leave a review. Consumers usually look at the overall ratings and don't spend much time to read the reviews, comment or "like" or "dislike" them.
Everyday, a specific number of Pearls will be minted and added to the " token Pool". Once a review posted, reviewer will earn some token from the pool. The amount of that depends of the amount of RevPower of that reviewer. Posting more reviews, commenting or voting on increases the RevPower but Revpower can be decreases by downvotes.
There is a grace period after posting a review for businesses to comment on it. During this period, it is not possible to vote or comment on that review. After that, any user who vote or comment earlier, earn more tokens. This encourages users to act on a review as soon as possible.
        <input></input>
        </ModalBody>
        <ModalFooter >
          <Button color="secondary" onClick={toggle}>Return</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AboutModal;