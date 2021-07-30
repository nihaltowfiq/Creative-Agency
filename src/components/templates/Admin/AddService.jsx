import { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { SidebarLayout } from '../../others';

export const AddService = () => {
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
        <SidebarLayout navFor="admin">
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
                        <Button variant="success" type="submit" size="lg">
                            Add
                        </Button>
                    </Form>
                </div>
            </Container>
        </SidebarLayout>
    );
};
