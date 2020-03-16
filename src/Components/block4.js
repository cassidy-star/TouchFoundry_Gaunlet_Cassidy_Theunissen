import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import rooom from './room1b.jpg';
import room2 from './room2.jpg';
import room3 from './room3.jpg';
import man from './man.png';
import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';


// This component is for the first video carousel on the website i had to imitate

function Four(){
    return(<div>
        <div className="headings-2">
          {/* My headings for this block */}
            <h4 className="headings-2" >Trending Spaces</h4>
            <h6 className="sub-headings">Popular with hour space users</h6><br></br>

        </div>
        {/* My two arrows /next and prev buttons */}
        <img src={leftArrow} className='l-arrow' />
        <img src={rightArrow} className='r-arrow' />

{/* Card deck imitating the carousel */}
{/* So i basically used the Card.Deck again here */}
        <CardDeck className="Deck-vid">
        <img src={man} className='faceB1' width="6%"/>  
  <Card>
    <Card.Img className="img1"  variant="top" src={rooom} />
    <div >
    <div className="star-cards">
    <p>R750 ZAR</p>
    </div>
    </div>
    <Card.Footer>
      <small className="text-muted">The Space Title</small><br></br>
      <small className="text-muted">Gardens,Cape Town</small>
    </Card.Footer>
    
  </Card>
  <img src={man} className='faceB2' width="6%"/>
  <Card>
 
  
    <Card.Img variant="top" src={room2} />
    <div >
    <div className="star-cards">
    <p>R750 ZAR</p>
    </div>
    </div>
    <Card.Footer>
      <small className="text-muted">The Space Title</small><br></br>
      <small className="text-muted">Gardens,Cape Town</small>
    </Card.Footer> 
    
  </Card>

  <img src={man} className='faceB3' width="6%"/>
  <Card>
    <Card.Img variant="top" src={room3} />
    <div >
    <div className="star-cards">
    <p>R750 ZAR</p>
    </div>
    </div>
    <Card.Footer className="card-foot">
      <small className="text-muted">The Space Title</small><br></br>
      <small className="text-muted">Gardens,Cape Town</small>
    </Card.Footer>
   
  </Card>
</CardDeck>


    </div>

    )
} 

export default Four ;