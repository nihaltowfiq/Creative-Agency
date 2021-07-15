import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#FBD062', height:'580px'}}>
            <Container>
                <div className="row d-flex justify-content-center p-5 mt-5">
                    <div className="col-md-4 col-12 pt-5">
                        <h1>Let Us Handle Your Project, Professionally!</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laboriosam consequatur recusandae ipsa cupiditate id!</p>
                    </div>
                    <div id="contactUs" className="col-md-8 col-12 pt-5">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control size="lg" type="email" placeholder="Your Email Address" />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Control size="lg" type="text" placeholder="Your Name / Company Name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control size="lg" as="textarea" rows="3" placeholder="Your Message" />
                            </Form.Group>
                            <Button variant="dark" type="submit" size="lg" >Send</Button>
                        </Form>
                    </div>
                </div>
                <p className="text-center mt-3 pt-5 ">copyrights Nihal Towfiq {new Date().getFullYear()}</p>
            </Container>
        </div>
    );
};

export default Footer;