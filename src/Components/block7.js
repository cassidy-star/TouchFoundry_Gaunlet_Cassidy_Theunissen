import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';
import man from './man.png';
import host1 from './host1.png';
import host2 from './host2.png';
import host3 from './host3.png';
// This component is for the  second carousel 
// Used an normal function component

function Seven(){
    return(
     <div>
        <div className="headings-2">
            <h4 className="headings-2" >Meet Fellow Hourspacers</h4><br></br>
          

        </div>
        <img src={leftArrow} className='l-arrow' />
        <img src={rightArrow} className='r-arrow' />
      
        <CardDeck className="Deck-vid">
        <img src={man} className='faceA1' width="6%"/>
        <Card>
        
          <Card.Img className="img1"  variant="top" src={host1} />         
          <Card.Footer>
            <small className="text-muted">Host Name </small><br></br>
            <small className="text-muted">Title of speech here</small>            
          </Card.Footer>        
        </Card>

        <img src={man} className='faceA2' width="6%"/>
        <Card >
          <Card.Img variant="top" src={host2}  />
          <Card.Footer >
            <small className="text-muted">Host Name </small><br></br>
            <small className="text-muted">Title of speech here</small>            
          </Card.Footer>           
        </Card>
      
        <img src={man} className='faceA3' width="6%"/>
        <Card>
          <Card.Img variant="top" src={host3} />
          <Card.Footer className="card-foot">
            <small className="text-muted">Host Name</small><br></br>
            <small className="text-muted">Title of speech here</small>           
          </Card.Footer>
          </Card>
      </CardDeck>
      </div>

    )
}

export default Seven;