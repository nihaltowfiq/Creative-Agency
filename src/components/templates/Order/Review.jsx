import { Button, Container, Form } from 'react-bootstrap';
import { SidebarLayout } from '../../others';

export const Review = ({ changeHandler, submitHandler }) => {
    return (
        <SidebarLayout navFor="customer">
            <Container
                className="mt-2 py-3"
                style={{ backgroundColor: '#F4F7FC', height: '600px' }}
            >
                <Form
                    id="reviewForm"
                    className="p-5 mr-5"
                    autocomplete="off"
                    onSubmit={submitHandler}
                >
                    <Form.Group>
                        <Form.Control
                            name="name"
                            size="lg"
                            type="text"
                            onChange={changeHandler}
                            placeholder="Your Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            name="companyName"
                            size="lg"
                            type="text"
                            onChange={changeHandler}
                            placeholder="Designation, Company's Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            name="description"
                            type="text"
                            size="lg"
                            as="textarea"
                            rows="3"
                            onChange={changeHandler}
                            placeholder="Description"
                            required
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit" size="lg">
                        Submit
                    </Button>
                </Form>
            </Container>
        </SidebarLayout>
    );
};
