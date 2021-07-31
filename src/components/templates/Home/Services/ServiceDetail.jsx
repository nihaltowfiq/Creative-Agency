import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

export const ServiceDetail = ({ service }) => {
    const history = useHistory();

    const handleServiceCard = () => {
        history.push(`/customer/order/${service._id}`);
    };

    return (
        <Col md={4} sm={12} className="mb-5">
            <div onClick={handleServiceCard} className="service-card p-3 py-5">
                <img
                    className="icon"
                    style={{ height: '80px' }}
                    src={`data:image/png;base64,${service.image.img}`}
                    alt=""
                />
                <h3 className="mt-3 mb-3">{service.title}</h3>
                <p>{service.details}</p>
            </div>
        </Col>
    );
};
