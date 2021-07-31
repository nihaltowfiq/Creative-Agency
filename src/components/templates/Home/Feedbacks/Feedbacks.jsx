import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FeedbackDetail } from './FeedbackDetail';

export const Feedbacks = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        fetch('https://dry-ocean-34765.herokuapp.com/allReviews')
            .then((res) => res.json())
            .then((data) => setFeedbackData(data));
    }, []);

    return (
        <Container className="pt-5 mt-5" style={{ minHeight: '100vh' }}>
            <h1 className="text-center">
                Clients <span style={{ color: '#7AB259' }}>Feedbacks</span>
            </h1>
            <div className="row d-flex justify-content-center mt-5 pt-5 mb-5 pb-5">
                {feedbackData.length === 0 && (
                    <h4 className="my-4 text-center text-danger">
                        Loading....
                    </h4>
                )}

                {feedbackData.map((feedback) => (
                    <FeedbackDetail
                        key={feedback._id}
                        feedback={feedback}
                    ></FeedbackDetail>
                ))}
            </div>
        </Container>
    );
};
