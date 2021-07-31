import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export const Footer = () => {
    return (
        <div style={{ backgroundColor: '#FBD062', height: '100vh' }}>
            <Container>
                <Row className="justify-content-center py-5">
                    <Col md={5} sm={12} className="py-5">
                        <h1>Let Us Handle Your Project, Professionally!</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Consectetur, laboriosam consequatur recusandae
                            ipsa cupiditate id!
                        </p>
                    </Col>
                    <Col md={7} sm={12} id="contactUs" className="py-5">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    size="lg"
                                    type="email"
                                    placeholder="Your Email Address"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Your Name / Company Name"
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    size="lg"
                                    as="textarea"
                                    rows="3"
                                    placeholder="Your Message"
                                />
                            </Form.Group>
                            <Button variant="dark" type="submit" size="lg">
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <p className="text-center mt-5 pt-4 mb-0">
                    copyrights Nihal Towfiq {new Date().getFullYear()}
                </p>
            </Container>
        </div>
    );
};
