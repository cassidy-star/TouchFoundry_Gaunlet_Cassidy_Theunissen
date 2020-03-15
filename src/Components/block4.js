import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CapeTown from './CapeTown.jpg';
import leftArrow from './leftArrow.png';

// This component is for the first video carousel on the website 

function Four(){
    return(<div>
        <div className="headings-2">
            <h4 className="headings-2" >Trending Spaces</h4>
            <h6 className="sub-headings">Popular with hour space users</h6><br></br>

        </div>
        <img src={leftArrow} alt='l-arrow' />
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

export default Four ;