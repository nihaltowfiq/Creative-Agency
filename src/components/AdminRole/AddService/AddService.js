import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const AddService = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={logo} alt="" /></Link>
                    <div className="mt-2 ml-3">
                        <p><Link to='/admin/serviceList'><FontAwesomeIcon icon={faShoppingBag} /> Service List</Link></p>
                        <p><Link to='/admin/addService'><FontAwesomeIcon icon={faPlus} /> Add Service</Link></p>
                        <p><Link to='/admin/makeAdmin'><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link></p>
                    </div>
                </Col>
                <Col md={9}>
                    <Row className="my-4 pb-3">
                        <Col><h2>Add Service</h2></Col>
                        <Col><h5 className="text-right">Nihal Towfiq</h5></Col>
                    </Row>
                    <Container className="mt-2 py-3" style={{ backgroundColor: "#F4F7FC", height: '600px' }}>
                        <div className="mt-3 ml-3">
                            <Form className="p-5 mr-5 bg-white" style={{ borderRadius: '10px' }} >
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label><b>Email</b></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="example@email.com" required />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Group>
                                            <Form.Label className="ml-3"><b>Icon</b></Form.Label>
                                            <Form.File
                                                className="position-relative form-control-lg"
                                                required
                                                name="file"
                                            />
                                        </Form.Group>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                        <Form.Control size="lg" as="textarea" rows="3" placeholder="Project Details" />
                                    </Form.Group>
                                </Form.Row>
                                <Button variant="success" type="submit" size="lg" >Send</Button>
                            </Form>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default AddService;