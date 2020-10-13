import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 col-12 mb-5">
            <div className="service-card p-3 py-5">
                <img style={{ height: '80px' }} src={service.icon} alt="" />
                <h3 className="mt-3 mb-3">{service.title}</h3>
                <p>{service.detail}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;