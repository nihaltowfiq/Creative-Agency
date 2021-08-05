import { Fragment, useContext, useState } from 'react';
import { UserContext } from '../App';
import { Review as ReviewCompoment } from '../components/templates';

export const Review = () => {
    const [reviewInfo, setReviewInfo] = useState({});
    const [loggedInUser] = useContext(UserContext);

    const handleChange = (e) => {
        const newReviewInfo = { ...reviewInfo, img: loggedInUser.img };
        newReviewInfo[e.target.name] = e.target.value;
        setReviewInfo(newReviewInfo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://dry-ocean-34765.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    document.getElementById('reviewForm').innerHTML =
                        '<h3 class="text-center text-success mt-5"><b>Review Submitted Successfully</b></h3>';
                }
            });
    };

    return (
        <Fragment>
            <ReviewCompoment
                changeHandler={handleChange}
                submitHandler={handleSubmit}
            />
        </Fragment>
    );
};
