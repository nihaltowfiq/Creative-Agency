import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import './Header.css';
import Headbar from '../Headbar/Headbar';

const Header = () => {
    return (
        <div className="header-wrapper">
            <Container>
                <Headbar></Headbar>
                <HeaderInfo></HeaderInfo>
                <HeaderIcons></HeaderIcons>
            </Container>
        </div>
    );
};

export default Header;