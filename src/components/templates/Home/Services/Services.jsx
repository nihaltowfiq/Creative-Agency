import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ServiceDetail } from '..';

export const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('https://dry-ocean-34765.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServicesData(data));
    }, []);

    return (
        <Container className="text-center mt-5" style={{ minHeight: '100vh' }}>
            <h1 id="services" className="my-5 pt-4 pb-5">
                Provide Awesome{' '}
                <span style={{ color: '#7AB259' }}>Services</span>
            </h1>

            <Row className="justify-content-center mb-5">
                {servicesData.length === 0 && (
                    <h4 className="my-4 text-center text-danger">
                        Loading Services....
                    </h4>
                )}
                {servicesData.map((service) => (
                    <ServiceDetail key={service._id} service={service} />
                ))}
            </Row>
        </Container>
    );
};
