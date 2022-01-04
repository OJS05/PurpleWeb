import React from 'react';
import './Components.css';
import Logo from '../assets/logo.png'
import {Col, Container, Row} from 'react-bootstrap';

function Header(props) {
    return (
        <header className='text-center text-white'>
            <div className='title'>
                <img src={Logo} className='logo' alt='logo'/>
                <Container>
                    <Row>
                        <Col>
                            <h1>Welcome to Purple!</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
}

export default Header;