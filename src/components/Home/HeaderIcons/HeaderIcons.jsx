import React from 'react';
import { Container } from 'react-bootstrap';

const HeaderIcons = () => {
    const iconPaths = [
        '/images/logos/google.png',
        '/images/logos/airbnb.png',
        '/images/logos/uber.png',
        '/images/logos/slack.png',
        '/images/logos/netflix.png',
    ];
    return (
        <Container className="pb-5 d-flex justify-content-around flex-wrap">
            {iconPaths.map((icon) => (
                <img
                    key={icon}
                    src={icon}
                    alt="icon"
                    className="my-2 mx-4"
                    width="130px"
                    height="50px"
                />
            ))}
        </Container>
    );
};

export default HeaderIcons;
