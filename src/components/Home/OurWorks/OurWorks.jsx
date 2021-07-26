import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const OurWorks = () => {
    return (
        <div
            style={{ background: '#111430' }}
            className="text-center pb-5 mb-5"
        >
            <h1 id="ourWorks" className="text-white pt-5">
                Here Are Some Of{' '}
                <span style={{ color: '#7AB259' }}>Our Work</span>
            </h1>
            <Container>
                <Carousel className="p-5">
                    <Carousel.Item className="">
                        <img
                            className="d-inline w-50 h-50"
                            src="/images/carousel-1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="">
                        <img
                            className="d-inline w-50"
                            src="/images/carousel-2.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="">
                        <img
                            className="d-inline w-50"
                            src="/images/carousel-3.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="">
                        <img
                            className="d-inline w-50 h-50"
                            src="/images/carousel-4.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default OurWorks;
