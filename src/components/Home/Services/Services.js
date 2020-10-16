import React, { useEffect } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        fetch('https://dry-ocean-34765.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, []);
    return (
        <Container className="text-center mt-5">
            <h1 id="services" className="mt-5 pt-4 mb-5 pb-5">Provide Awesome <span style={{ color: '#7AB259' }}>Services</span></h1>
            <div className="row justify-content-center mb-5">
                {
                    servicesData.length === 0 &&
                    <h4 className="my-4 text-center text-danger">Loading Services....</h4>
                }
                {
                    servicesData.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                }
            </div>
        </Container>
    );
};

export default Services;