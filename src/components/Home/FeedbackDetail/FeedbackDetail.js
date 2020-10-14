import React from 'react';
import './FeedbackDetail.css';

const FeedbackDetail = ({ feedback }) => {
    return (
        <div className="col-md-4">
            <div className="feedback-card mb-4">
                <div className="row">
                    <div className="col-md-3">
                        <img style={{ height: '50px' }} src={feedback.img} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h5>{feedback.name}</h5>
                        <small>{feedback.position}</small>
                    </div>
                </div>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem molestiae fugiat dignissimos est possimus.</p>
            </div>
        </div>
    );
};

export default FeedbackDetail;