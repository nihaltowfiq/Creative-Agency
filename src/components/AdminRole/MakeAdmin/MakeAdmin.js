import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({});
    const handleBlur = e => {
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    };
    const handleSubmit = e => {
        e.preventDefault();
        fetch('https://dry-ocean-34765.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    document.getElementById('makeAdminForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>Admin Added Successfully</b></h3>'
                }
            })
    };
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
                            <Form id="makeAdminForm" onSubmit={handleSubmit} className="p-5 mr-5 bg-white" style={{ borderRadius: '10px' }} >
                                <Form.Label><b>Email</b></Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Control onBlur={handleBlur} name="email" size="lg" type="text" placeholder="example@email.com" required />
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