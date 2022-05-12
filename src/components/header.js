import React from 'react';
import {Nav, Navbar, Container}from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const navbar = () => {
  return (
    <Router>
        <div>
            <Navbar bg="primary" variant="light">
                <span class="navbar-brand mb-0 h1">
                  <Container>
                  <Nav className="me-auto">
                      <Nav.Link as={Link} to ="/">Home</Nav.Link>
                      <Nav.Link as={Link} to ="/About">About</Nav.Link>
                      <Nav.Link as={Link} to ="/Project">Projects</Nav.Link>
                      <Nav.Link as={Link} to ="/Contact">socials</Nav.Link>
                  </Nav>
                  </Container>
                </span>
            </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/About" element ={<About/>}/>
            <Route path="/Project" element ={<Projects/>}/>
            <Route path="/" element ={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
        </div>
  </Router>
  )
}

export default navbar