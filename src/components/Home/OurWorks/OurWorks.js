import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-5.png';

const OurWorks = () => {
    return (
        <div style={{ background: '#111430' }} className="text-center pb-5 mb-5">
            <h1 className="text-white p-5">Here Are Some Of <span style={{ color: '#7AB259' }}>Our Work</span></h1>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="500px"
                            src={carousel1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="500px"
                            src={carousel2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="500px"
                            src={carousel3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default OurWorks;