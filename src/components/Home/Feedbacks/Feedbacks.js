import React from 'react';
import { Container } from 'react-bootstrap';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

const feedbackData = [
    {
        name: 'Lal Mohon',
        img: customer1,
        position: 'CEO, PocketKhali'
    },
    {
        name: 'Lal Mohon',
        img: customer2,
        position: 'CEO, PocketKhali'
    },
    {
        name: 'Lal Mohon',
        img: customer3,
        position: 'CEO, PocketKhali'
    }
]

const Feedbacks = () => {
    return (
        <Container className="pt-5 mt-5">
            <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedbacks</span></h1>
            <div className="row d-flex justify-content-center mt-5 pt-5 mb-5 pb-5">
                {
                    feedbackData.map(feedback => <FeedbackDetail key={feedback.img} feedback={feedback}></FeedbackDetail>)
                }
            </div>
        </Container>
    );
};

export default Feedbacks;