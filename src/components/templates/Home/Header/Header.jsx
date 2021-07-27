import { Container } from 'react-bootstrap';
import { Headbar, HeaderIcons, HeaderInfo } from '..';
import './Header.css';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <Container>
                <Headbar />
                <HeaderInfo />
                <HeaderIcons />
            </Container>
        </div>
    );
};
