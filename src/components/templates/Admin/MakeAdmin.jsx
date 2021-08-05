import { Button, Col, Container, Form } from 'react-bootstrap';
import { SidebarLayout } from '../../others';

export const MakeAdmin = ({ changeHandler, submitHandler }) => {
    return (
        <SidebarLayout navFor="admin">
            <Container
                className="mt-2 py-3"
                style={{ backgroundColor: '#F4F7FC', height: '600px' }}
            >
                <Form
                    id="makeAdminForm"
                    className="p-5 mr-5 mt-3 ml-3 bg-white"
                    style={{ borderRadius: '10px' }}
                    onSubmit={submitHandler}
                >
                    <Form.Label>
                        <b>Email</b>
                    </Form.Label>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control
                                name="email"
                                size="lg"
                                type="email"
                                onChange={changeHandler}
                                placeholder="example@email.com"
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button variant="success" type="submit" size="lg">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        </SidebarLayout>
    );
};
