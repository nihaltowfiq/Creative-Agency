import React from 'react';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import { Container } from 'react-bootstrap';

const HeaderIcons = () => {
    return (
        <Container className="row text-center justify-content-center d-flex mt-5 pt-5 mb-3">
            <div className="col-md-2 col-4 ">
                <img style={{height:'40px'}} src={slack} alt=""  />
            </div>
            <div className="col-md-2 col-4">
                <img style={{height:'40px'}} src={google} alt="" />
            </div>
            <div className="col-md-2 col-4">
                <img style={{height:'40px'}} src={uber} alt="" />
            </div>
            <div className="col-md-2 col-4">
                <img style={{height:'40px'}} src={netflix} alt="" />
            </div>
            <div className="col-md-2 col-4">
                <img style={{height:'40px'}} src={airbnb} alt="" />
            </div>
        </Container>
    );
};

export default HeaderIcons;