import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Navbar className='navbar-style' expand="lg">
            <Container>

            <LinkContainer to='/'>
                <Navbar.Brand href="/">
                <Image className='log-img-style' src='images/logo.jpg' alt="VTU" roundedCircle />
                <h6 className='logo-text-style'>Vishvesvarya Technological University, Belagavi</h6>
                </Navbar.Brand>
            </LinkContainer>  
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

            <LinkContainer to='/'>
                <Nav.Link href="#">Home</Nav.Link>
            </LinkContainer>
             

             <LinkContainer to='/about'>
                <Nav.Link href="/about">About Us</Nav.Link>
             </LinkContainer>
              
              <NavDropdown title="Academic" id="basic-nav-dropdown">
                <LinkContainer to='/admission'>
                  <NavDropdown.Item href="/admission">Admission</NavDropdown.Item>
                </LinkContainer>
                
                <LinkContainer to ="/Circular">
                <NavDropdown.Item href="/Circular">Circulars & Notification</NavDropdown.Item>
                </LinkContainer>
                
                <LinkContainer to='/Certificate'>
                <NavDropdown.Item href="/Certificate">Certificate Issused</NavDropdown.Item>
                </LinkContainer>
                
              </NavDropdown>

      <NavDropdown title="Examination" id="basic-nav-dropdown">
        <LinkContainer to='/Guidlines'>
          <NavDropdown.Item href="/Guidlines">Examination Guidlines</NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to='/Application'> 
        <NavDropdown.Item href="/Application">Examination Application</NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to='/results'>
        <NavDropdown.Item href="/results">Result</NavDropdown.Item>
        </LinkContainer>

        {/* <LinkContainer to='/resultpage'>
        <NavDropdown.Item href="/resultpage">FinalResultScreen</NavDropdown.Item>
        </LinkContainer> */}
       
      </NavDropdown>

      <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
        <LinkContainer to='/computerscience'>
        <NavDropdown.Item href="/computerscience">Computer Science Engg</NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to='/Civil Engg'>
          <NavDropdown.Item href="/Civil Engg">Civil Engg</NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to='/Electronics'>
        <NavDropdown.Item href="/Electronics">Electronics & Communication Engg</NavDropdown.Item>
        </LinkContainer>
       
      </NavDropdown>

      <NavDropdown title="Staff Login" id="basic-nav-dropdown">
        <LinkContainer to='/login'>
        <NavDropdown.Item href="/login">Login as Admin</NavDropdown.Item>
        </LinkContainer>
        
      </NavDropdown>
    </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}
export default Header