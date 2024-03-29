import { Button, Col, Container, Row } from 'react-bootstrap';
import './EnrolledServices.css';
import { SidebarLayout } from '../../others';

export const EnrolledServices = ({ data }) => {
    return (
        <SidebarLayout navFor="customer">
            <Container
                className="mt-2 py-3"
                style={{ backgroundColor: '#F4F7FC' }}
            >
                {data.length === 0 && (
                    <h4 className="my-4 text-center text-danger">
                        Loading Enrolled Services....
                    </h4>
                )}
                <Row>
                    {data.map((order) => (
                        <Col key={order._id} md={5}>
                            <div className="enrolled-card mx-2 my-2">
                                <Row>
                                    <Col md={7}>
                                        <img
                                            style={{ height: '70px' }}
                                            src={`data:image/png;base64,${order.icon}`}
                                            alt=""
                                        />
                                    </Col>
                                    <Col>
                                        <Button
                                            className="mr-auto"
                                            variant="outline-danger"
                                        >
                                            {order.status}
                                        </Button>
                                    </Col>
                                </Row>
                                <h3 className="py-2">{order.serviceName}</h3>
                                <p>{order.details}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </SidebarLayout>
    );
};
