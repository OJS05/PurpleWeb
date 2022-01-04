import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Components.css';
import Florian from '../assets/florian.png'
import Frank from '../assets/frank.png';
import BigSmoke from '../assets/big_smoke.png';
import Paisley from '../assets/paisley.png';
import Duncan from '../assets/duncan.png';
import Jerald from '../assets/jerald.png';

function Boxes(){
    return (
        <section className="team-boxed">
            <Container className="p-5">
                <div className="intro">
                    <h2 className="text-center">Support the future of Purple</h2>
                    <p className="text-center">
                        By subscribing to one of the plans below, you are helping to ensure Purple is able to continue what it does best: harbor a community of
                        like-minded players and content creators.
                    </p>
                </div>
                <Row>
                    <Col className='item'>
                        <div className="box grow">
                            <img className='sub-img' src={Florian} alt='Florian'/>
                            <h3 className='name'>Florian Plan</h3>
                            <p className='title'>AUD $5.00 / MONTH</p>
                            <div>
                                <a href='https://buy.stripe.com/fZe7sRex0bhQfLO9AB'>
                                    <Button className='btn-primary'>Checkout</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className='item'>
                        <div className="box grow">
                            <img className='sub-img' src={Frank} alt='Frank'/>
                            <h3 className='name'>Frank Plan</h3>
                            <p className='title'>AUD $10.00 / MONTH</p>
                            <div>
                                <a href='https://buy.stripe.com/9AQfZn3Smfy6czC3ce'>
                                    <Button className='btn-primary'>Checkout</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className='item'>
                        <div className="box grow">
                            <img className='sub-img' src={BigSmoke} alt='Big Smoke'/>
                            <h3 className='name'>Big Smoke Plan</h3>
                            <p className='title'>AUD $15.00 / MONTH</p>
                            <div>
                                <a href='https://buy.stripe.com/7sI14t88Cfy6aru147'>
                                    <Button className='btn-primary'>Checkout</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='item'>
                        <div className="box grow">
                            <img className='sub-img' src={Paisley} alt='Paisley'/>
                            <h3 className='name'>Paisley Plan</h3>
                            <p className='title'>AUD $20.00 / MONTH</p>
                            <div>
                                <a href='https://buy.stripe.com/9AQ00pcoSgCaeHKbIM'>
                                    <Button className='btn-primary'>Checkout</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className='item'>
                        <div className="box grow">
                            <img className='sub-img' src={Duncan} alt='Duncan'/>
                            <h3 className='name'>Duncan Plan</h3>
                            <p className='title'>AUD $25.00 / MONTH</p>
                            <div>
                                <a href='https://buy.stripe.com/aEUbJ79cGgCafLOcMM'>
                                    <Button className='btn-primary'>Checkout</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className='item'>
                        <div className="box grow">
                            <img className='sub-img' src={Jerald} alt='Jerald'/>
                            <h3 className='name'>Jerald Plan</h3>
                            <p className='title'>AUD $30.00 / MONTH</p>
                            <div>
                                <a href='https://buy.stripe.com/bIY00pex0clU8jm6ot'>
                                    <Button className='btn-primary'>Checkout</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default Boxes;