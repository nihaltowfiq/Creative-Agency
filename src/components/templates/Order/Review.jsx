import { useState, useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { SidebarLayout } from '../../others';

export const Review = () => {
    const [reviewInfo, setReviewInfo] = useState({});
    const [loggedInUser] = useContext(UserContext);

    const handleBlur = (e) => {
        const newReviewInfo = { ...reviewInfo, img: loggedInUser.img };
        newReviewInfo[e.target.name] = e.target.value;
        setReviewInfo(newReviewInfo);
    };
    const handleSubmit = (e) => {
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
        e.preventDefault();
    };

    return (
        <SidebarLayout navFor="customer">
            <Container
                className="mt-2 py-3"
                style={{ backgroundColor: '#F4F7FC', height: '600px' }}
            >
                <Form
                    id="reviewForm"
                    onSubmit={handleSubmit}
                    className="p-5 mr-5"
                >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            onBlur={handleBlur}
                            name="name"
                            size="lg"
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            onBlur={handleBlur}
                            name="companyName"
                            size="lg"
                            type="text"
                            placeholder="Designation, Company's Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            onBlur={handleBlur}
                            name="description"
                            type="text"
                            size="lg"
                            as="textarea"
                            rows="3"
                            placeholder="Description"
                            required
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit" size="lg">
                        Submit
                    </Button>
                </Form>
            </Container>
        </SidebarLayout>
    );
};
