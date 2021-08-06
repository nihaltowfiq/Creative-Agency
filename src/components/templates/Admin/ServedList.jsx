import { Container } from 'react-bootstrap';
import { SidebarLayout } from '../../others';

export const ServedList = ({ data, updateStatus }) => {
    const statuses = ['Pending', 'OnGoing', 'Done'];

    return (
        <SidebarLayout navFor="admin">
            <Container
                className="py-3"
                style={{
                    backgroundColor: '#F4F7FC',
                    minHeight: 'calc(100vh - 90px)',
                }}
            >
                <div
                    className="bg-white mt-2 p-4"
                    style={{ borderRadius: '10px' }}
                >
                    <p
                        className="text-center text-success"
                        style={{ fontSize: '1.5em' }}
                        id="update"
                    ></p>
                    {data.length === 0 && (
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
                            {data.map((order) => (
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
                                                updateStatus(e, order._id)
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
