import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    const history = useHistory();
    const handleServiceCard = () => {
        history.push('/customer/order');
    };
    return (
        <div className="col-md-4 col-12 mb-5">
            <div onClick={handleServiceCard} className="service-card p-3 py-5">
                <img style={{ height: '80px' }} src={service.icon} alt="" />
                <h3 className="mt-3 mb-3">{service.title}</h3>
                <p>{service.detail}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;