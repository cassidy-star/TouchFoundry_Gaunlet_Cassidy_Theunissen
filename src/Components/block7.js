import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import CapeTown from './CapeTown.jpg';
// This component is for the  second carousel 
// Used an normal function component

function Seven(){
    return(
     <div>
        <div className="headings-2">
            <h4 className="headings-2" >Meet Fellow Hourspacers</h4><br></br>
          

        </div>
        <CardDeck className="Deck-vid">
        <Card>
          <Card.Img className="img1"  variant="top" src={CapeTown} />
          <Card.Footer>
            <small className="text-muted">The Space Title</small><br></br>
            <small className="text-muted">The Space Title</small>
          </Card.Footer>
          
        </Card>
      
        <Card>
          <Card.Img variant="top" src={CapeTown} />
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small><br></br>
            <small className="text-muted">The Space Title</small>
          </Card.Footer> 
          
        </Card>
      
      
        <Card>
          <Card.Img variant="top" src={CapeTown} />
          <Card.Footer className="card-foot">
            <small className="text-muted">Last updated 3 mins ago</small><br></br>
            <small className="text-muted">The Space Title</small>
          </Card.Footer>
         
        </Card>
      </CardDeck>
      </div>

    )
}

export default Seven;