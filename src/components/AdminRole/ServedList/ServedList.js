import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const ServedList = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={logo} alt="" /></Link>
                    <p><Link to='/admin/order'><img style={{ height: '20px' }} src='' alt="" /> Order</Link></p>
                    <p><Link to='/admin/serviceList'><img style={{ height: '20px' }} src='' alt="" /> Service Lis</Link></p>
                    <p><Link to='/admin/review'><img style={{ height: '20px' }} src='' alt="" /> Review</Link></p>
                </Col>
                <Col md={9}>
                    <Row className="my-4 pb-3">
                        <Col><h2>Services</h2></Col>
                        <Col><h5 className="text-right">Nihal Towfiq</h5></Col>
                    </Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registration Date</th>
                                <th>Event Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ServedList;