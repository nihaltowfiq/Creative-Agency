import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { SidebarLayout } from '../../others';

export const ServedList = () => {
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
        <SidebarLayout navFor="admin">
            <Container
                className="mt-2 py-3"
                style={{ backgroundColor: '#F4F7FC', height: '600px' }}
            >
                <div className="bg-white p-4" style={{ borderRadius: '10px' }}>
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
                                >
                                    Name
                                </th>
                                <th>Email</th>
                                <th>Service</th>
                                <th>Details</th>
                                <th
                                    style={{
                                        borderRadius: '0 10px 10px 0',
                                    }}
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order.name}</td>
                                    <td style={{ width: '200px' }}>
                                        {order.email}
                                    </td>
                                    <td>{order.serviceName}</td>
                                    <td
                                        className="text-left"
                                        style={{ width: '350px' }}
                                    >
                                        {order.details}
                                    </td>
                                    <td style={{ width: '150px' }}>
                                        <select
                                            className="form-control"
                                            onChange={(e) =>
                                                statusChange(order._id, e)
                                            }
                                            name="status"
                                        >
                                            {statuses.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                    selected={
                                                        option === order.status
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
        </SidebarLayout>
    );
};
