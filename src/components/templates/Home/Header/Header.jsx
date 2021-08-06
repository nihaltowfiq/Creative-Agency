import { Container } from 'react-bootstrap';
import { Headbar, HeaderInfo } from '..';
import './Header.css';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <Container>
                <Headbar />
                <HeaderInfo />
            </Container>
        </div>
    );
};
