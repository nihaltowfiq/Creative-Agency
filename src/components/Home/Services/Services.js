import React from 'react';
import mobile from '../../../images/icons/mobile.png';
import web from '../../../images/icons/web.png';
import graphic from '../../../images/icons/graphic.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Container } from 'react-bootstrap';

const servicesData = [
    {
        title: 'Mobile App Design',
        icon: mobile,
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, alias!'
    },
    {
        title: 'Web & Mobile Design',
        icon: web,
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, alias!'
    },
    {
        title: 'Web & Mobile Design',
        icon: graphic,
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, alias!'
    },
    {
        title: 'Web & Mobile Design',
        icon: graphic,
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, alias!'
    }
]

const Services = () => {
    return (
        <Container className="text-center">
            <h1 className="mt-5 pt-4 mb-5">Provide Awesome <span style={{color:'#7AB259'}}>Services</span></h1>
            <div className="row justify-content-center mb-5">
                {
                    servicesData.map(service => <ServiceDetail key={service.icon} service={service}></ServiceDetail>)
                }
            </div>
        </Container>
    );
};

export default Services;