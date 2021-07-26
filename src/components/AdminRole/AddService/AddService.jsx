import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faShoppingBag,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { useState } from 'react';

const AddService = () => {
    const [loggedInUser] = useContext(UserContext);
    const [serviceInfo, setServiceInfo] = useState({});
    const [serviceFile, setServiceFile] = useState(null);
    const handleBlur = (e) => {
        const newServiceInfo = { ...serviceInfo };
        newServiceInfo[e.target.name] = e.target.value;
        setServiceInfo(newServiceInfo);
    };
    const handleFileChange = (e) => {
        const newServiceFile = e.target.files[0];
        setServiceFile(newServiceFile);
    };
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', serviceFile);
        formData.append('title', serviceInfo.title);
        formData.append('details', serviceInfo.details);

        fetch('https://dry-ocean-34765.herokuapp.com/addService', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data === false) {
                    document.getElementById('serviceForm').innerHTML =
                        '<h3 class="text-center text-success mt-5"><b>Service Added Successfully</b></h3>';
                }
            });
        e.preventDefault();
    };
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Link to="/home">
                        <img
                            style={{ height: '70px', margin: '20px 0 40px 0' }}
                            src="/images/logos/logo.png"
                            alt="logo"
                        />
                    </Link>
                    <div className="mt-2 ml-3">
                        <p>
                            <Link to="/admin/serviceList">
                                <FontAwesomeIcon icon={faShoppingBag} /> Service
                                List
                            </Link>
                        </p>
                        <p>
                            <Link to="/admin/addService">
                                <FontAwesomeIcon icon={faPlus} /> Add Service
                            </Link>
                        </p>
                        <p>
                            <Link to="/admin/makeAdmin">
                                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                            </Link>
                        </p>
                    </div>
                </Col>
                <Col md={9}>
                    <Row className="my-4 pb-3">
                        <Col>
                            <h2>Add Service</h2>
                        </Col>
                        <Col>
                            <h5 className="text-right">{loggedInUser.name}</h5>
                        </Col>
                    </Row>
                    <Container
                        className="mt-2 py-3"
                        style={{ backgroundColor: '#F4F7FC', height: '600px' }}
                    >
                        <div className="mt-3 ml-3">
                            <Form
                                id="serviceForm"
                                onSubmit={handleSubmit}
                                className="p-5 mr-5 bg-white"
                                style={{ borderRadius: '10px' }}
                            >
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>
                                            <b>Service Title</b>
                                        </Form.Label>
                                        <Form.Control
                                            onBlur={handleBlur}
                                            name="title"
                                            size="lg"
                                            type="text"
                                            placeholder="Title"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Group>
                                            <Form.Label className="ml-3">
                                                <b>Icon</b>
                                            </Form.Label>
                                            <input
                                                onChange={handleFileChange}
                                                name="file"
                                                type="file"
                                                className="form-control-lg"
                                                required
                                            />
                                        </Form.Group>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group
                                        as={Col}
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Control
                                            onBlur={handleBlur}
                                            name="details"
                                            size="lg"
                                            as="textarea"
                                            rows="3"
                                            placeholder="Service Details"
                                            required
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Button
                                    variant="success"
                                    type="submit"
                                    size="lg"
                                >
                                    Add
                                </Button>
                            </Form>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default AddService;
