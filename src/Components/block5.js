import React from 'react';
import image4 from './image4.jpg';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Above are the needed components
// This is for the 100% section


function Five(){
    return( <div>
        
        {/* Here i have a image for the background of the section */}
        <section></section>
         <img src={image4}  />
         {/* Then are my headings for this section */}
         <h4 className="b5-headings">100% Secured and Protected</h4><br></br><br></br><br></br><br></br>
         <h6 className="b5-subheadings">Trust abs Safety is our #1 priority at Hourspace</h6>
       
       
        
          

{/* Beneath is my container/gird for my two coloured boxes */}

       
    {/* Heres the first box and the edits  */}
    <Card className="green-box"  border="success" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Looking for a Space</Card.Title>
      <Card.Text>
      <ul className="list">
  
      {/* In the list below are the contents that are in the box */}
            <li>Secure Merchant Transactions </li>
            <li>Authenticated Hosts </li>
            <li>Direct Messaging Hosts</li>
            <li>Host Profile with Hosts</li>
            
        </ul>  
        
      </Card.Text>
    </Card.Body>
  </Card>

{/* I did the exact same for the second box */}
   
    <Card  className="blue-box" border="info" style={{ width: '20rem' }}>
    <Card.Body>
            <Card.Title>Hostingout a space</Card.Title>
            <Card.Text>
            <ul className="list">
            <li>R1,000,000 Insurance Coverage </li>
            <li>Booking Management  Flexible</li>
            <li>Cancellation and Deposit Policies</li>
            <li>24/7 Customer Service Team</li>
            
        </ul>  
            </Card.Text>
        </Card.Body>
  </Card> 

        
<section/>
    </div>

    )
}
 export default Five;