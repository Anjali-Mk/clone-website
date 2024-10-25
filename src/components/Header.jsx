import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Header() {
  const [show,setshow] = useState(false)

  const handlecancel=()=>{
    setshow(false)
  }
  const handleShow=()=>{
    setshow(true)
  }
  const handleclose=()=>{
    setshow(false)
  }
  return (
    <>
    
    {[ 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-white mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className='ps-5 ms-5 pb-3'><img src="https://bigeasyanimalrescue.org/wp-content/uploads/2024/03/BigEasyAnimalRescue_logo.jpg" alt="" width={'150px'} /></Navbar.Brand>
            <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={handleclose}
              backdrop="static"
              keyboard="false"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BIGEASYANIMALRESCUE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-evenly flex-grow-1 pe-3">
                 <Link to={'/'} style={{textDecoration:'none'}}> <Nav.Link href="#adopt" onClick={handlecancel}>Adopt</Nav.Link></Link>
                  <Link to={'/foster'} style={{textDecoration:'none'}} ><Nav.Link href="#action2" onClick={handlecancel}>Foster</Nav.Link></Link>
                  <Link to={'/surrender'} style={{textDecoration:'none'}} ><Nav.Link href="#action2" onClick={handlecancel}>Surrender</Nav.Link></Link>
                  <Link to={'/store'} style={{textDecoration:'none'}}><Nav.Link href="#action2" onClick={handlecancel}>Store</Nav.Link></Link>
                  <Link to={'/volunteer'} style={{textDecoration:'none'}} ><Nav.Link href="#action2" onClick={handlecancel}>volunteer</Nav.Link></Link>




                  <NavDropdown
                    title="About"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to={'/contact'} style={{textDecoration:'none'}}><NavDropdown.Item href="#action3" onClick={handlecancel}>Contact Us</NavDropdown.Item></Link>
                   
                    <NavDropdown.Divider />
                    
                  </NavDropdown>
                </Nav>
                <Button variant="outline-success" onClick={handlecancel}>Donate</Button>

               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        
        
    
    </>
  )
}

export default Header
