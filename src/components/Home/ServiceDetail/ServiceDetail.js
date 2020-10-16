import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    const history = useHistory();
    const handleServiceCard = (id) => {
        history.push(`/customer/order/${id}`);
    };
    return (
        <div className="col-md-4 col-12 mb-5">
            <div onClick={() => handleServiceCard(service._id)} className="service-card p-3 py-5">
                <img className="icon" style={{ height: '80px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                <h3 className="mt-3 mb-3">{service.title}</h3>
                <p>{service.details}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;