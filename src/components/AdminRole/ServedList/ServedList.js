import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const ServedList = () => {
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
                    <Row className="my-4 pb-1">
                        <Col><h2>Services</h2></Col>
                        <Col><h5 className="text-right">Nihal Towfiq</h5></Col>
                    </Row>
                    <Container className="mt-2 py-3" style={{ backgroundColor: "#F4F7FC", height: '600px' }}>
                        <div className="bg-white p-4" style={{borderRadius:'10px'}}>
                            <Table borderless responsive="sm md" hover>
                                <thead style={{ backgroundColor: '#F4F7FC' }}>
                                    <tr>
                                        <th style={{borderRadius:"10px 0 0 10px"}}>Name</th>
                                        <th>Email</th>
                                        <th>Service</th>
                                        <th>Project Details</th>
                                        <th style={{borderRadius:"0 10px 10px 0"}}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>agha</td>
                                        <td>agha</td>
                                        <td>agha</td>
                                        <td>agha</td>
                                        <td>agha</td>
                                    </tr>
                                    <tr>
                                        <td>agha</td>
                                        <td>agha</td>
                                        <td>agha</td>
                                        <td>agha</td>
                                        <td>agha</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ServedList;