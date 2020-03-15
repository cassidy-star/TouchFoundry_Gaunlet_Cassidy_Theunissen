import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import CapeTown from './CapeTown.jpg'; 



function Three(){
    return( <div className="Curated-block "><div  >
        <h4 className="headings-2">Our Curated List</h4>
        <h6 className="sub-headings">Some of our favourite, featured collection</h6><br></br>



        <CardDeck className="Deck">
  <Card>
 
    <Card.Img className="img1"  variant="top" src={CapeTown} />
    <div className="container">
    <div class="text-block">
    <p>Scenic Meeting Spots</p>
    </div>
    </div>
    
  </Card>

  <Card>
   
    <Card.Img variant="top" src={CapeTown} />
    <div className="container">
    <div class="text-block">
    <p>Affordable party venues</p>
    </div>
    </div>
  </Card>


  <Card>
  
    <Card.Img variant="top" src={CapeTown} />
    <div className="container">
    <div class="text-block">
    <p>Scenic Meeting Spots</p>
    </div>
   </div>
  </Card>
</CardDeck>



<br></br><br></br><br></br>

<CardDeck className="Deck">
  <Card>

    <Card.Img className="img1"  variant="top" src={CapeTown} />
    <div className="container">
    <div class="text-block">
    <p>Affordable party venues</p>
    </div>
    </div>
   
  </Card>

  <Card>
  
    <Card.Img variant="top" src={CapeTown} />
    <div className="container">
    <div class="text-block">
    <p>Scenic Meeting Spots</p>
    </div>
    </div>
    
  </Card>

  <Card>
  
    <Card.Img variant="top" src={CapeTown} />
    <div className="container">
    <div class="text-block">
    <p>Affordable party venues</p>
    </div>
    </div>
    
  </Card>
</CardDeck>

<br></br><br></br>




</div>










    </div>

    )
}


export default Three;