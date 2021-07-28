import { useState, useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faShoppingBag,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const ServedList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    const statuses = ['Pending', 'OnGoing', 'Done'];

    useEffect(() => {
        fetch('https://dry-ocean-34765.herokuapp.com/allOrders')
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const statusChange = (id, e) => {
        const updatedOrder = { status: e.target.value };
        document.getElementById('update').innerText = 'Updating Changes';

        fetch(`https://dry-ocean-34765.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    document.getElementById('update').innerText =
                        'Changes Updated Successfully!';
                }
            });
    };
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Link to="/home">
                        <img
                            style={{ height: '70px', margin: '20px 0 40px 0' }}
                            src="/images/logos/logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="mt-2 ml-3">
                        <p>
                            <Link to="/admin/serviceList">
                                <FontAwesomeIcon icon={faShoppingBag} /> Service
                                List
                            </Link>
                        </p>
                        <p>
                            <Link to="/admin/addService">
                                <FontAwesomeIcon icon={faPlus} /> Add Service
                            </Link>
                        </p>
                        <p>
                            <Link to="/admin/makeAdmin">
                                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                            </Link>
                        </p>
                    </div>
                </Col>
                <Col md={9}>
                    <Row className="my-4 pb-1">
                        <Col>
                            <h2>Services</h2>
                        </Col>
                        <Col>
                            <h5 className="text-right">{loggedInUser.name}</h5>
                        </Col>
                    </Row>
                    <Container
                        className="mt-2 py-3"
                        style={{ backgroundColor: '#F4F7FC', height: '600px' }}
                    >
                        <div
                            className="bg-white p-4"
                            style={{ borderRadius: '10px' }}
                        >
                            <p
                                className="text-center text-success"
                                style={{ fontSize: '1.5em' }}
                                id="update"
                            ></p>
                            {orders.length === 0 && (
                                <h4 className="my-4 text-center text-danger">
                                    Loading Orders....
                                </h4>
                            )}

                            <table className="table bg-white mt-4 text-center table-hover rounded table-borderless">
                                <thead className="bg-light">
                                    <tr>
                                        <th
                                            style={{
                                                borderRadius: '10px 0 0 10px',
                                            }}
                                            scope="col"
                                        >
                                            Name
                                        </th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Details</th>
                                        <th
                                            style={{
                                                borderRadius: '0 10px 10px 0',
                                            }}
                                            scope="col"
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order._id}>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.serviceName}</td>
                                            <td
                                                className="text-left"
                                                width="300px"
                                            >
                                                {order.details}
                                            </td>
                                            <td>
                                                <select
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        statusChange(
                                                            order._id,
                                                            e
                                                        )
                                                    }
                                                    name="status"
                                                >
                                                    {statuses.map((option) => (
                                                        <option
                                                            key={option}
                                                            value={option}
                                                            selected={
                                                                option ===
                                                                order.status
                                                            }
                                                        >
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ServedList;
