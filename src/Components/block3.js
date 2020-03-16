import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ven1 from './ven1.jpg'; 
import ven2 from './ven2.jpg'; 
import ven3 from './ven3.jpg'; 
import ven4 from './ven4.jpg'; 
import ven5 from './ven5.jpg'; 
import ven6 from './ven6.jpg'; 

// Above are all my components neede for my file
// This file if for the six images 

//  Function components as its easy to use 
function Three(){
    return( <div className="Curated-block "><div  >
        <h4 className="headings-2">Our Curated List</h4>
        <h6 className="sub-headings">Some of our favourite, featured collection</h6><br></br>


{/* My card deck my images are in so hat they can appear next to one another */}
        <CardDeck className="Deck">
  <Card>
 {/* Here im putting in my image that will display on my card  */}
    <Card.Img className="img1"  variant="top" src={ven1} />
    <div className="container">
      {/* The below div i used to display my overlay on my images  */}
    <div class="text-block">
    <p>Scenic Meeting Spots</p>
    </div>
    </div>
    
  </Card>
{/* I did the same for every card  */}
  <Card>
    <Card.Img variant="top" src={ven2} />
    <div className="container">
    <div class="text-block">
    <p>Affordable party venues</p>
    </div>
    </div>
  </Card>


  <Card>
  
    <Card.Img variant="top" src={ven3} />
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

    <Card.Img className="img1"  variant="top" src={ven4} />
    <div className="container">
    <div class="text-block">
    <p>Affordable party venues</p>
    </div>
    </div>
   
  </Card>

  <Card>
  
    <Card.Img variant="top" src={ven5} />
    <div className="container">
    <div class="text-block">
    <p>Scenic Meeting Spots</p>
    </div>
    </div>
    
  </Card>

  <Card>
  
    <Card.Img variant="top" src={ven6} />
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