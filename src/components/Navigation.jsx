import React from 'react';
import './Components.css';
import {Button, Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navigation(props){
    return (
        <div>
            <Container>
                <Navbar>
                    <Link to='/' class='navbar-brand'>Purple</Link>
                    <Navbar.Collapse>
                        <Nav>
                            <a href="https://map.purplesmp.me" class='nav-link'>Map</a>
                            <a href="https://plan.purplesmp.me" class='nav-link'>Analytics</a>
                            <Link to="/donate" class='nav-link'>Donate</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/Apply">
                        <Button>Apply</Button>
                    </Link>
                </Navbar>
            </Container>
        </div>
    );
}

export default Navigation;