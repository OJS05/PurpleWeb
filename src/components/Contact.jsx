import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Contact(props){
    return(
        <section className='bg-white p-4'>
            <Container>
                <Row>
                    <Col>
                        <p className='text-secondary'>
                            Product policy:
                            <br/>
                            Subscriptions can be cancelled at any time.
                            <br/>
                            Refunds will not be given for any product.
                        </p>
                    </Col>
                    <Col>
                        <p className='text-secondary'>
                            Contact us:
                            <br/>
                            admin@purplesmp.me
                            <br/>
                            +61 491 011 899
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;