import React from 'react';
import './FeedbackDetail.css';

const FeedbackDetail = ({ feedback }) => {
    return (
        <div className="col-md-4">
            <div className="feedback-card mb-4">
                <div className="row">
                    <div className="col-md-3">
                        <img style={{ height: '50px', borderRadius:"50%" }} src={feedback.img} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h5>{feedback.name}</h5>
                        <small>{feedback.companyName}</small>
                    </div>
                </div>
                <p className="pt-3">{feedback.description}</p>
            </div>
        </div>
    );
};

export default FeedbackDetail;