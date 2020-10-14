import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={logo} alt="" /></Link>
                    <div className="mt-2 ml-3">
                        <p><Link to='/customer/order'><FontAwesomeIcon icon={faShoppingCart} /> Order</Link></p>
                        <p><Link to='/customer/enrolledServices'><FontAwesomeIcon icon={faShoppingBag} /> Enrolled Services</Link></p>
                        <p><Link to='/customer/review'><FontAwesomeIcon icon={faCommentDots} /> Review</Link></p>
                    </div>
                </Col>
                <Col md={9}>
                    <Row className="my-4 pb-3">
                        <Col><h2>Order</h2></Col>
                        <Col><h5 className="text-right">Nihal Towfiq</h5></Col>
                    </Row>
                    <Container className="mt-2 py-3" style={{ backgroundColor: "#F4F7FC", height: '600px' }}>
                        <Form className="p-5 mr-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control size="lg" type="email" placeholder="Your Name / Company's Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Control size="lg" type="text" placeholder="Your Email Address" />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Control size="lg" type="text" placeholder="Service" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control size="lg" as="textarea" rows="3" placeholder="Project Details" />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control size="lg" type="text" placeholder="Price" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.File
                                            className="position-relative form-control-lg"
                                            required
                                            name="file"
                                            feedbackTooltip
                                        />
                                    </Form.Group>

                                </Col>
                            </Row>

                            <Button variant="dark" type="submit" size="lg" >Send</Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Order;