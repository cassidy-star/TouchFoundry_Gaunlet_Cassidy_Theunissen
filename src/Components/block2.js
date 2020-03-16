import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import durban4 from './durban4.jpg'; 
import CapeTown from './CapeTown.jpg'; 
import Gauteng from './Gauteng.jpg';

// Above are all the components needed in theis file
// This component is for the first three images 




// A functional component for this one
function Two(){
    return(<div >
      {/*  my headings for this block */}
       <div>
       <h3 className="headings-2">Where are you planning your event ?</h3>
       <h5 className="sub-headings">Discover &  Book a Space for Your Next Event </h5>
       </div> <br></br>
       <br></br>

      {/* I used a Card.Deck for it to be displayed net to one another */}
       <CardDeck className="Deck">
  <Card>
    <Card.Img className="img1"  variant="top" src={CapeTown} />
    {/* This is used for my overlay at the bottom of the images  */}
    <div className="container">
    <div class="text-block">
    <p>Cape Town</p>
    </div>
    </div>
  </Card>
  

{/* i did the same for the whole deck */}
  <Card>
    <Card.Img className="img1"  variant="top" src={Gauteng} />
    <div className="container">
    <div class="text-block">
    <p>Gauteng</p>
    </div>
    </div>
  </Card>


  <Card>
    <Card.Img className="img1" variant="top" src={durban4} />
    <div className="container">
   <div class="text-block">
    <p>Durban</p>
    </div>
    </div>
  </Card>
</CardDeck>



        </div>
    
        
    )
}


export default Two;
