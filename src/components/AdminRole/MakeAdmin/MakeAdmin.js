import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                        <Col><h2>Make Admin</h2></Col>
                        <Col><h5 className="text-right">{loggedInUser.name}</h5></Col>
                    </Row>
                    <Container className="mt-2 py-3" style={{ backgroundColor: "#F4F7FC", height: '600px' }}>
                        <div className="mt-3 ml-3">
                            <Form className="p-5 mr-5 bg-white" style={{ borderRadius: '10px' }} >
                                <Form.Label><b>Email</b></Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Control size="lg" type="text" placeholder="example@email.com" required />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Button variant="success" type="submit" size="lg" >Submit</Button>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;