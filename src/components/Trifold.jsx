import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPeopleCarry, faSignal, faDatabase} from '@fortawesome/free-solid-svg-icons';
import './Components.css';

function Trifold(props){
    return(
        <section class='text-center bg-light' style={{padding: 50}}>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <FontAwesomeIcon icon={faPeopleCarry} class='icon'/>
                            <h3>Tight Community</h3>
                            <p>
                                One thing Purple prides itself on is its community. By interacting on a regular basis, we aim to build great relationships with each other both in game and in reality.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <FontAwesomeIcon icon={faSignal} class='icon'/>
                            <h3>Australian Server</h3>
                            <p>
                                Purple is based in Sydney, Australia. Don't be intimidated by the time zones though as we harbor an international community of Minecrafters.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <FontAwesomeIcon icon={faDatabase} class='icon'/>
                            <h3>Modern Hardware</h3>
                            <p>
                                Purple is ran on a virtual machine with a huge 24 gigabytes of RAM, and 4 whole CPU cores. This high quality housing ensures that you get the best possible experience on Purple.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Trifold;