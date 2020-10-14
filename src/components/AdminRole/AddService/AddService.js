import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const AddService = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={logo} alt="" /></Link>
                    <p><Link to='/admin/order'><img style={{ height: '20px' }} src='' alt="" /> Order</Link></p>
                    <p><Link to='/admin/serviceList'><img style={{ height: '20px' }} src='' alt="" /> Service Lis</Link></p>
                    <p><Link to='/admin/review'><img style={{ height: '20px' }} src='' alt="" /> Review</Link></p>
                </Col>
            </Row>
        </Container>
    );
};

export default AddService;