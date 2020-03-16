import React from 'react';
import image3 from './image3.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './logo.PNG';

// This is the component where my navbar and header image is in 

// Started off with an functional component / a easy to understand one
function One(){
    return(<div>

{/* Here beneathe is the Navbar  tag , inside i also edit the size, variant and background color */}
        <Navbar expand="lg" variant="light" bg="white">
        <div>
            {/* My navbar  logo goes in here*/}
        <Navbar.Brand href="#"><img src={logo} alt='banner' /></Navbar.Brand>
        {/*  Then i had the three buttons required  */}
        {/* <form classname="search"><input placeholder="search"></input></form> */}
        
        <Button className="btn01" variant="outline-dark">List Your Space</Button>
        <Button className="btn02" variant=" light"> Sign Up</Button>
        <Button className="btn03" variant=" light"> Log in </Button>
        </div>
        
        </Navbar>
        {/* Here is my header image for the web page */}
        <header className="header-image"><img src={image3} alt='banner' />

        

       
        <div className="headings">
        <h1 ><b>Find a Space</b></h1><br/>
        <h5 > Discover & Book a Space for Your Next Event</h5><br></br>

         {/* beneath is my select menu and search button */}
        <select id="select-1" placeholder="Location">
            <option value="volvo">Location</option>
            <option value="saab"> Location</option>
        </select>

        <select id="select-2">
            <option value="volvo">What are you planning</option>
            <option value="saab">Saab</option>
        </select>

        <button className="btn-2">Search</button>

        </div>

        </header>
        
    </div>)
}





export default One;