import React, { useEffect } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/services')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, []);
    return (
        <Container className="text-center mt-5">
            <h1 className="mt-5 pt-4 mb-5 pb-5">Provide Awesome <span style={{color:'#7AB259'}}>Services</span></h1>
            <div className="row justify-content-center mb-5">
                {
                    servicesData.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                }
            </div>
        </Container>
    );
};

export default Services;