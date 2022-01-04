import React from 'react';
import {Carousel, Container, Row, Col } from 'react-bootstrap';

function Slideshow(props){
    return(
        <section class='text-center testimonials p-5'>
            <Container class='carousel-indicators'>
                <h2 class='players'>Meet the players...</h2>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <img src="https://crafatar.com/avatars/388a0cb0acff41f5874f55bbbdecda74/" alt='cracle'/>
                                <h1 class='p-2'>cracle</h1>
                                <p>
                                    Purple's number one fun loving player.
                                    <br />
                                    <br />
                                    <em>Wherever there is chaos to be found,</em>
                                    <br />
                                    <em>cracle is sure to be around.</em>
                                </p>
                            </Col>
                            <Col>
                                <img src="https://crafatar.com/avatars/9fa7a9366b004349ac122ccf0d43df2d/" alt='jonno17'/>
                                <h1 class='p-2'>jonno17</h1>
                                <p>
                                    Purple&#39;s most infamous extortionist.
                                    <br />
                                    <br />
                                    <em>A connoisseur of exotics and rares,</em>
                                    <br />
                                    <em>jonno&#39;s prices may catch you unawares.</em>
                                </p>
                            </Col>
                            <Col>
                                <img src="https://crafatar.com/avatars/af2af5a30cea4572bf56db99d37aa101/" alt='mojitovulture'/>
                                <h1 class='p-2'>mojitovulture</h1>
                                <p>
                                    Purple&#39;s damsel in distress.
                                    <br />
                                    <br />
                                    <em>While swimming in glamour and charm,</em>
                                    <br />
                                    <em>moji has a tendency to buy the farm.</em>
                                </p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <img src="https://crafatar.com/avatars/a1eb74dedb3e48fa90888cfeb3e75679" alt='kerrod33'/>
                                <h1 class='p-2'>Kerrod33</h1>
                                <p>
                                    Purple&#39;s shotgun rider.
                                    <br />
                                    <br />
                                    <em>In for a penny, in for a pound,</em>
                                    <br />
                                    <em>Kerrod is sure to stick around.</em>
                                </p>
                            </Col>
                            <Col>
                                <img src="https://crafatar.com/avatars/bcec8ac15ddc425ba0d9419c76d282f6" alt='oakton'/>
                                <h1 class='p-2'>Oakton</h1>
                                <p>
                                    Purple&#39;s philosophical professor.
                                    <br />
                                    <br />
                                    <em>When there is discussion to be had,</em>
                                    <br />
                                    <em>Oak chimes in like the next comrade.</em>
                                    <br />
                                </p>
                            </Col>
                            <Col>
                                <img src="https://crafatar.com/avatars/36046b94e3fc4c4ba02cfece842d5477" alt='pat'/>
                                <h1 class='p-2'>prettyboipat</h1>
                                <p>
                                    Purple&#39;s principled politician.
                                    <br />
                                    <br />
                                    <em>Once a corrupt puppet mayor,</em>
                                    <br />
                                    <em>Pat is now an honest player.</em>
                                </p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <img src="https://crafatar.com/avatars/dbe56b348bd9405ea91eb54108f4171b" alt='almarca'/>
                                <h1 class='p-2'>Almarca</h1>
                                <p>
                                    Purple&#39;s adored architect.
                                    <br />
                                    <br />
                                    <em>A building planner fit for hire,</em>
                                    <br />
                                    <em>just don&#39;t ask about the spire.</em>
                                    <br />
                                </p>
                            </Col>
                            <Col>
                                <img src="https://crafatar.com/avatars/3821e57e7b0f420fb8e5509dcc0f21c8" alt='oj'/>
                                <h1 class='p-2'>OJS05</h1>
                                <p>
                                    Purple&#39;s omnipotent owner.
                                    <br />
                                    <br />
                                    <em>The creator of this very site,</em>
                                    <br />
                                    <em>you can bet he&#39;s quite alright.</em>
                                </p>
                            </Col>
                            <Col>
                                <img src="https://crafatar.com/avatars/f958cf5588534218be55e32efa2a2c51" alt='potzyb'/>
                                <h1 class='p-2'>PotzyB</h1>
                                <p>
                                    Purple&#39;s suave streamer.
                                    <br />
                                    <br />
                                    <em>An entertainer by trade and heart,</em>
                                    <br />
                                    <em>I give it 2 weeks before he&#39;ll depart.</em>
                                </p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}

export default Slideshow;