import React from 'react';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import { Container } from 'react-bootstrap';

const HeaderIcons = () => {
    const icons = [google, airbnb, uber, slack, netflix];
    return (
        <Container className="pb-5 d-flex justify-content-around flex-wrap">
            {
                icons.map(icon => <img key={icon} src={icon} alt="" className="my-2 mx-4" width="130px" height="50px" />)
            }
        </Container>
    );
};

export default HeaderIcons;