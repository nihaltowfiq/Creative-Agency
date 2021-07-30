import { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { SidebarLayout } from '../../others';

export const Order = () => {
    const [servicesData, setServicesData] = useState([]);
    const [orderInfo, setOrderInfo] = useState({});
    const [orderFile, setOrderFile] = useState(null);
    const [loggedInUser] = useContext(UserContext);

    const { id } = useParams();

    useEffect(() => {
        fetch('https://dry-ocean-34765.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServicesData(data));
    }, []);
    const service = servicesData.find((service) => service._id === id) || {};

    const handleBlur = (e) => {
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[e.target.name] = e.target.value;
        newOrderInfo.status = 'Pending';
        setOrderInfo(newOrderInfo);
    };
    const handleFileChange = (e) => {
        const newOrderFile = e.target.files[0];
        setOrderFile(newOrderFile);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', orderFile);
        formData.append('name', orderInfo.name || loggedInUser.name);
        formData.append('email', orderInfo.email || loggedInUser.email);
        formData.append('serviceName', service.title || orderInfo.serviceName);
        formData.append('details', orderInfo.details);
        formData.append('price', orderInfo.price);
        formData.append('icon', service.image.img);
        formData.append('status', orderInfo.status);

        fetch('https://dry-ocean-34765.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data === false) {
                    document.getElementById('orderForm').innerHTML =
                        '<h3 class="text-center text-success mt-5"><b>Orderd Successfully</b></h3>';
                }
            });
    };

    return (
        <SidebarLayout navFor="customer">
            <Container
                className="mt-2 py-3"
                style={{ backgroundColor: '#F4F7FC', height: '600px' }}
            >
                <Form
                    id="orderForm"
                    onSubmit={handleSubmit}
                    className="p-5 mr-5"
                >
                    <Form.Group>
                        <Form.Control
                            onBlur={handleBlur}
                            name="name"
                            size="lg"
                            type="text"
                            defaultValue={loggedInUser.name}
                            placeholder="Your Name / Company's Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            onBlur={handleBlur}
                            name="email"
                            size="lg"
                            type="email"
                            defaultValue={loggedInUser.email}
                            placeholder="Your Email Address"
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            onBlur={handleBlur}
                            name="serviceName"
                            size="lg"
                            type="text"
                            defaultValue={service.title}
                            placeholder="Service"
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            onBlur={handleBlur}
                            name="details"
                            type="text"
                            size="lg"
                            as="textarea"
                            rows="3"
                            placeholder="Project Details"
                            required
                        />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="price"
                                    size="lg"
                                    type="number"
                                    placeholder="Price"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.File
                                    onChange={handleFileChange}
                                    className="position-relative form-control-lg"
                                    required
                                    name="file"
                                    feedbackTooltip
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="dark" type="submit" size="lg">
                        Order
                    </Button>
                </Form>
            </Container>
        </SidebarLayout>
    );
};
