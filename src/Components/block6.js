import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Above are my neede componets for this file 
// This component is the footer part of the website



function Six(){
    return(<div >
        {/* The div before the footer */}
<div className="info">
        <Container>
         <Row>
    <Col>   
    {/* My headings for the footer  */}
    <h5 className="btm-headings">Hourspace</h5>
    <ul className="list">
            <li>About</li>
            <li>Contact Us</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Space use arrangement</li>
        </ul>  
    </Col>


    <Col>
    <ul className="list">
    <h5 className="btm-headings">Discover spaces</h5>
{/* My list of information  */}
            <li>How it works </li>
            <li>List your space </li>
            <li>Help Center</li>
            <li>Press</li>
            <li>Site Map</li>
        </ul>  </Col>


    <Col>
    <h5 className="btm-headings">Connect</h5>

    <ul className="list">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>  </Col>
  </Row>
</Container>
</div>
<footer>
    Copyright 2016 Hourspace.co . All rights resevered
</footer>
    </div>

    )
}
export default Six;