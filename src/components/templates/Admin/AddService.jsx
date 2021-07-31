import { Button, Col, Container, Form } from 'react-bootstrap';
import { SidebarLayout } from '../../others';

export const AddService = ({
    validated,
    handleChange,
    handleFileChange,
    submitHandler,
}) => {
    return (
        <SidebarLayout navFor="admin">
            <Container
                className="mt-2 py-3"
                style={{ backgroundColor: '#F4F7FC', height: '600px' }}
            >
                <div className="mt-3 ml-3">
                    <Form
                        id="serviceForm"
                        className="p-5 mr-5 bg-white"
                        style={{ borderRadius: '10px' }}
                        noValidate
                        validated={validated}
                        onSubmit={submitHandler}
                    >
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    <b>Service Title</b>
                                </Form.Label>
                                <Form.Control
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
