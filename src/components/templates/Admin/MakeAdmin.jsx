import { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { SidebarLayout } from '../../others';

export const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    const handleBlur = (e) => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dry-ocean-34765.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    document.getElementById('makeAdminForm').innerHTML =
                        '<h3 class="text-center text-success mt-5"><b>Admin Added Successfully</b></h3>';
                }
            });
    };

    return (
        <SidebarLayout navFor="admin">
            <Container
                className="mt-2 py-3"
                style={{ backgroundColor: '#F4F7FC', height: '600px' }}
            >
                <div className="mt-3 ml-3">
                    <Form
                        id="makeAdminForm"
                        onSubmit={handleSubmit}
                        className="p-5 mr-5 bg-white"
                        style={{ borderRadius: '10px' }}
                    >
                        <Form.Label>
                            <b>Email</b>
                        </Form.Label>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="email"
                                    size="lg"
                                    type="text"
                                    placeholder="example@email.com"
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Button
                                    variant="success"
                                    type="submit"
                                    size="lg"
                                >
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>
            </Container>
        </SidebarLayout>
    );
};
