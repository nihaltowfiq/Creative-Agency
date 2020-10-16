import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

const Feedbacks = () => {
    const [feedbackData, setFeedbackData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/allReviews')
            .then(res => res.json())
            .then(data => setFeedbackData(data))
    }, []);
    console.log(feedbackData);
    return (
        <Container className="pt-5 mt-5">
            <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedbacks</span></h1>
            <div className="row d-flex justify-content-center mt-5 pt-5 mb-5 pb-5">
                {
                    feedbackData.map(feedback => <FeedbackDetail key={feedback._id} feedback={feedback}></FeedbackDetail>)
                }
            </div>
        </Container>
    );
};

export default Feedbacks;