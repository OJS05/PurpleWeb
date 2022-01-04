import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Discord from '../assets/discord.png';

function Footer(props){
    return(
        <section className='text-center text-white footer p-5'>
            <Container>
                <Row>
                    <Col>
                        <h2>Already applied? Join our Discord now for updates!</h2>
                    </Col>
                    <Col>
                        <a href='https://discord.gg/FbU5uKfJsn'>
                            <img className='discord' src={Discord} alt='Discord'/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;