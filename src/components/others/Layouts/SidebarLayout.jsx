import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { adminItems, customerItems } from '../../../utils/sidebar.items';
import { useAuthCtx } from '../../../store';

export const SidebarLayout = ({ children, navFor }) => {
    const { loggedInUser } = useAuthCtx();
    const { pathname } = useLocation();

    let items = [];
    if (navFor === 'admin') {
        items = adminItems;
    } else if (navFor === 'customer') {
        items = customerItems;
    }

    const selectedItem = items.find(({ slug }) => pathname === slug);

    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <NavLink to="/home">
                        <img
                            style={{ height: '50px', margin: '20px 0 40px 0' }}
                            src="/images/logos/logo.png"
                            alt="logo"
                        />
                    </NavLink>
                    <div className="mt-3 ml-3">
                        {items.map(({ title, icon, slug }, i) => (
                            <Link key={i} to={slug} activeClassName="NavActive">
                                <FontAwesomeIcon icon={icon} /> {title}
                            </Link>
                        ))}
                    </div>
                </Col>
                <Col md={10}>
                    <Row className="py-3 align-items-center">
                        <Col>
                            <h2 className="mb-0">{selectedItem?.title}</h2>
                        </Col>
                        <Col>
                            <h5 className="mb-0 text-right">{loggedInUser.name}</h5>
                        </Col>
                    </Row>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

const Link = styled(NavLink)`
    display: block;
    margin-bottom: 1.25rem;
    color: black;

    &:hover {
        text-decoration: none;
        color: var(--success);
    }
    svg {
        width: 1.125rem !important;
        margin-right: 0.315rem;
    }
    &.NavActive {
        color: var(--success);
        font-weight: 600;
    }
`;
